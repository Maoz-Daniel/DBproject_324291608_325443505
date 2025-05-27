-- ======================================
-- View 1: Zone_Visit_Stats
-- ======================================

-- Create View: Aggregated entry statistics per zone and gym
CREATE VIEW Zone_Visit_Stats AS
SELECT 
    z.zoneID,
    z.zoneType,
    g.name AS gymName,
    COUNT(er.personID) AS entryCount
FROM zone z
JOIN gym g ON z.gymID = g.gymID
LEFT JOIN entryRecord er ON z.zoneID = er.zoneID AND z.gymID = er.gymID
GROUP BY z.zoneID, z.zoneType, g.name;

-- --------------------------------------
-- Query 1: Zones with more than 2 entries
-- --------------------------------------
SELECT * 
FROM Zone_Visit_Stats
WHERE entryCount > 2;

-- --------------------------------------
-- Query 2: Number of zones per zone type
-- --------------------------------------
SELECT zoneType, COUNT(*) AS numZones
FROM Zone_Visit_Stats
GROUP BY zoneType;


-- ======================================
-- View 2: Equipment_Supply_Info
-- ======================================

-- Create View: Equipment supplied by each supplier with quantity and date
CREATE VIEW Equipment_Supply_Info AS
SELECT 
    e.equipment_id,
    e.name AS equipment_name,
    e.category,
    s.personid AS supplier_id,
    s.email AS supplier_email,
    s.address AS supplier_address,
    es.quantity,
    es.supply_date
FROM Equipment e
JOIN Equipment_Supplier es ON e.equipment_id = es.equipment_id
JOIN Supplier s ON es.personid = s.personid;

-- --------------------------------------
-- Query 1: Equipment supplied after Jan 1st, 2025
-- --------------------------------------
SELECT *
FROM Equipment_Supply_Info
WHERE supply_date > '2025-01-01';

-- --------------------------------------
-- Query 2: Total quantity supplied by each supplier
-- --------------------------------------
SELECT supplier_email, SUM(quantity) AS total_quantity
FROM Equipment_Supply_Info
GROUP BY supplier_email;
