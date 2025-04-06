-- Create Person table
CREATE TABLE person (
    personID INT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    dateOfBirth DATE CHECK (dateOfBirth <= CURRENT_DATE)
);

-- Create Gym table
CREATE TABLE gym (
    gymID INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gymLocation VARCHAR(255) NOT NULL
);

-- Create Zone table
CREATE TABLE zone (
    zoneID INT,
    gymID INT,
    zoneType VARCHAR(50) NOT NULL,
    onlyForMembers BOOLEAN DEFAULT FALSE,
    isAccessible BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (zoneID, gymID),
    FOREIGN KEY (gymID) REFERENCES gym(gymID) ON DELETE CASCADE
);

-- Create Access Device table
CREATE TABLE accessDevice (
    deviceID INT,
    zoneID INT,
    gymID INT,
    deviceType VARCHAR(50) NOT NULL,
    PRIMARY KEY (deviceID, zoneID, gymID),
    FOREIGN KEY (zoneID, gymID) REFERENCES zone(zoneID, gymID) ON DELETE CASCADE
);

-- Create Member table
CREATE TABLE member (
    personID INT PRIMARY KEY,
    memberStartDate DATE NOT NULL,
    membershipType VARCHAR(50) NOT NULL CHECK (membershipType IN ('Monthly', 'Annual', 'Quarterly', 'Daily', 'Personal Training')),
    isActive BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (personID) REFERENCES person(personID) ON DELETE CASCADE
);

-- Create Maintenance Worker table
CREATE TABLE maintenanceWorker (
    personID INT PRIMARY KEY,
    contactInfo VARCHAR(100) NOT NULL,
    hireDate DATE NOT NULL,
    FOREIGN KEY (personID) REFERENCES person(personID) ON DELETE CASCADE,
    CONSTRAINT valid_contact CHECK (contactInfo ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' OR 
                                    contactInfo ~ '^\+?[0-9]{10,15}$')
);

-- Create Entry Record table
CREATE TABLE entryRecord (
    personID INT,
    deviceID INT,
    zoneID INT,
    gymID INT,
    entryTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (personID, deviceID, zoneID, gymID, entryTime),
    FOREIGN KEY (personID) REFERENCES person(personID),
    FOREIGN KEY (deviceID, zoneID, gymID) REFERENCES accessDevice(deviceID, zoneID, gymID),
    CONSTRAINT valid_entry_time CHECK (entryTime <= CURRENT_TIMESTAMP)
);

-- Create Exit Record table
CREATE TABLE exitRecord (
    personID INT,
    deviceID INT,
    zoneID INT,
    gymID INT,
    exitTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (personID, deviceID, zoneID, gymID, exitTime),
    FOREIGN KEY (personID) REFERENCES person(personID),
    FOREIGN KEY (deviceID, zoneID, gymID) REFERENCES accessDevice(deviceID, zoneID, gymID),
    CONSTRAINT valid_exit_time CHECK (exitTime <= CURRENT_TIMESTAMP)
);

-- Create Repair table
CREATE TABLE repair (
    personID INT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deviceID INT,
    zoneID INT,
    gymID INT,
    specialNotes VARCHAR(255),
    serviceType VARCHAR(50) NOT NULL CHECK (serviceType IN ('Urgent Repair', 'Maintenance', 'Upgrade', 'Inspection', 'Replacement')),
    PRIMARY KEY (personID, date, deviceID, zoneID, gymID),
    FOREIGN KEY (personID) REFERENCES maintenanceWorker(personID),
    FOREIGN KEY (deviceID, zoneID, gymID) REFERENCES accessDevice(deviceID, zoneID, gymID),
    CONSTRAINT valid_repair_date CHECK (date <= CURRENT_TIMESTAMP)
);

-- Create indexes for better performance
CREATE INDEX idx_entry_person ON entryRecord(personID);
CREATE INDEX idx_entry_device ON entryRecord(deviceID, zoneID, gymID);
CREATE INDEX idx_entry_time ON entryRecord(entryTime);

CREATE INDEX idx_exit_person ON exitRecord(personID);
CREATE INDEX idx_exit_device ON exitRecord(deviceID, zoneID, gymID);
CREATE INDEX idx_exit_time ON exitRecord(exitTime);

CREATE INDEX idx_repair_person ON repair(personID);
CREATE INDEX idx_repair_device ON repair(deviceID, zoneID, gymID);
CREATE INDEX idx_repair_date ON repair(date);
