-- =========================================
-- STEP 1: Insert suppliers into person table
-- =========================================
WITH numbered AS (
  SELECT
    supplier_id,
    split_part(name, ' ', 1) AS firstName,
    substring(name FROM position(' ' IN name) + 1) AS lastName,
    ROW_NUMBER() OVER () + 800 AS newPersonID
  FROM supplier
)
INSERT INTO person (personID, firstName, lastName, dateOfBirth)
SELECT
  newPersonID,
  firstName,
  lastName,
  NULL
FROM numbered;

-- =========================================
-- STEP 2: Add personID column to supplier and update it
-- =========================================
ALTER TABLE supplier ADD COLUMN personID INT;

WITH numbered AS (
  SELECT
    supplier_id,
    ROW_NUMBER() OVER () + 800 AS newPersonID
  FROM supplier
)
UPDATE supplier
SET personID = numbered.newPersonID
FROM numbered
WHERE supplier.supplier_id = numbered.supplier_id;

-- =========================================
-- STEP 3: Migrate equipment_supplier to use personID instead of supplier_id
-- =========================================

-- Add new column
ALTER TABLE equipment_supplier ADD COLUMN personID INT;

-- Update values based on matching supplier_id
UPDATE equipment_supplier es
SET personID = s.personID
FROM supplier s
WHERE es.supplier_id = s.supplier_id;

-- Drop old foreign key
ALTER TABLE equipment_supplier DROP CONSTRAINT equipment_supplier_supplier_id_fkey;

-- Drop old column
ALTER TABLE equipment_supplier DROP COLUMN supplier_id;

-- Add new foreign key referencing person
ALTER TABLE equipment_supplier
ADD CONSTRAINT fk_equipment_supplier_person
FOREIGN KEY (personID) REFERENCES person(personID);

-- =========================================
-- STEP 4: Clean up supplier table structure
-- =========================================

-- Remove old standalone columns
ALTER TABLE supplier DROP COLUMN IF EXISTS supplier_id;
ALTER TABLE supplier DROP COLUMN IF EXISTS name;
ALTER TABLE supplier DROP COLUMN IF EXISTS contact_number;

-- Define personID as primary key
ALTER TABLE supplier ADD PRIMARY KEY (personID);

-- Add foreign key to person
ALTER TABLE supplier
ADD CONSTRAINT fk_supplier_person
FOREIGN KEY (personID) REFERENCES person(personID);



-- Step 1: Create unified parent table "job"
CREATE TABLE job (
    jobID SERIAL PRIMARY KEY,              -- unique job ID
    personID INT REFERENCES person(personID),  -- person performing the job
    date DATE,
    cost NUMERIC,
    specialNotes TEXT,
    serviceType TEXT
);

-- Step 2: Create new child tables for repair and maintenance
CREATE TABLE repair_new (
    jobID INT PRIMARY KEY REFERENCES job(jobID),  -- reference to job
    deviceID INT,
    zoneID INT,
    gymID INT,
    FOREIGN KEY (zoneID, gymID) REFERENCES zone(zoneID, gymID)
);

CREATE TABLE maintenance_new (
    jobID INT PRIMARY KEY REFERENCES job(jobID),  -- reference to job
    equipmentID INT,
    nextServiceDate DATE,
    FOREIGN KEY (equipmentID) REFERENCES equipment(equipmentID)
);

-- Step 3: Insert job data from old repair table
INSERT INTO job (personID, date, specialNotes, serviceType)
SELECT
    personID,
    date,
    specialNotes,
    serviceType
FROM repair;

-- Step 4: Insert data into repair_new using matching row numbers
WITH repair_numbered AS (
    SELECT *,
           ROW_NUMBER() OVER (ORDER BY personID, date, deviceID) AS rn
    FROM repair
),
job_numbered AS (
    SELECT jobID,
           ROW_NUMBER() OVER (ORDER BY personID, date) AS rn
    FROM job
)
INSERT INTO repair_new (jobID, deviceID, zoneID, gymID)
SELECT
    j.jobID,
    r.deviceID,
    r.zoneID,
    r.gymID
FROM repair_numbered r
JOIN job_numbered j ON r.rn = j.rn;

-- Step 5: Insert job data from old maintenance table
INSERT INTO job (date, cost, specialNotes, serviceType, personID)
SELECT
    service_date,
    cost,
    description,
    'maintenance',
    NULL
FROM maintenance;

-- Step 6: Insert data into maintenance_new using matching row numbers
WITH maintenance_numbered AS (
    SELECT *,
           ROW_NUMBER() OVER (ORDER BY service_date, equipment_id) AS rn
    FROM maintenance
),
job_numbered AS (
    SELECT jobID,
           ROW_NUMBER() OVER (ORDER BY date, cost, specialNotes) AS rn
    FROM job
    WHERE serviceType = 'maintenance'
)
INSERT INTO maintenance_new (jobID, equipmentID, nextServiceDate)
SELECT
    j.jobID,
    m.equipment_id,
    m.nextservice_date
FROM maintenance_numbered m
JOIN job_numbered j ON m.rn = j.rn;

-- Step 7: Add foreign key constraints
ALTER TABLE repair_new
ADD CONSTRAINT repair_new_job_fkey
FOREIGN KEY (jobID) REFERENCES job(jobID);

ALTER TABLE maintenance_new
ADD CONSTRAINT maintenance_new_job_fkey
FOREIGN KEY (jobID) REFERENCES job(jobID);

-- Step 8: Drop old tables and rename new ones
DROP TABLE IF EXISTS repair;
DROP TABLE IF EXISTS maintenance;

ALTER TABLE repair_new RENAME TO repair;
ALTER TABLE maintenance_new RENAME TO maintenance;

UPDATE job
SET personid = FLOOR(RANDOM() * (800 - 401 + 1)) + 401
WHERE personid IS NULL;
