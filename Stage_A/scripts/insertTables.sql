-- Insert data into person table
INSERT INTO person (personID, firstName, lastName, dateOfBirth) 
VALUES (1, 'Israel', 'Israeli', TO_DATE('15-05-1985', 'DD-MM-YYYY'));
INSERT INTO person (personID, firstName, lastName, dateOfBirth) 
VALUES (2, 'Sarah', 'Cohen', TO_DATE('22-07-1990', 'DD-MM-YYYY'));
INSERT INTO person (personID, firstName, lastName, dateOfBirth) 
VALUES (3, 'Jacob', 'Levy', TO_DATE('10-03-1982', 'DD-MM-YYYY'));
INSERT INTO person (personID, firstName, lastName, dateOfBirth) 
VALUES (4, 'Rachel', 'Abraham', TO_DATE('05-12-1988', 'DD-MM-YYYY'));
INSERT INTO person (personID, firstName, lastName, dateOfBirth) 
VALUES (5, 'Moses', 'David', TO_DATE('30-09-1975', 'DD-MM-YYYY'));

-- Insert data into gym table
INSERT INTO gym (gymID, name, gymLocation) 
VALUES (1, 'Central Gym', 'Tel Aviv');
INSERT INTO gym (gymID, name, gymLocation) 
VALUES (2, 'North Gym', 'Haifa');
INSERT INTO gym (gymID, name, gymLocation) 
VALUES (3, 'South Gym', 'Beer Sheva');

-- Insert data into zone table
INSERT INTO zone (zoneID, gymID, zoneType, onlyForMembers, isAccessible) 
VALUES (1, 1, 'Weights', TRUE, TRUE);
INSERT INTO zone (zoneID, gymID, zoneType, onlyForMembers, isAccessible) 
VALUES (2, 1, 'Cardio', FALSE, TRUE);
INSERT INTO zone (zoneID, gymID, zoneType, onlyForMembers, isAccessible) 
VALUES (3, 1, 'Studio', TRUE, TRUE);
INSERT INTO zone (zoneID, gymID, zoneType, onlyForMembers, isAccessible) 
VALUES (1, 2, 'Weights', TRUE, TRUE);
INSERT INTO zone (zoneID, gymID, zoneType, onlyForMembers, isAccessible) 
VALUES (2, 2, 'Cardio', FALSE, TRUE);

-- Insert data into accessDevice table
INSERT INTO accessDevice (deviceID, zoneID, gymID, deviceType) 
VALUES (1, 1, 1, 'Entrance Gate');
INSERT INTO accessDevice (deviceID, zoneID, gymID, deviceType) 
VALUES (2, 2, 1, 'Card Reader');
INSERT INTO accessDevice (deviceID, zoneID, gymID, deviceType) 
VALUES (3, 3, 1, 'Fingerprint Scanner');
INSERT INTO accessDevice (deviceID, zoneID, gymID, deviceType) 
VALUES (1, 1, 2, 'Entrance Gate');
INSERT INTO accessDevice (deviceID, zoneID, gymID, deviceType) 
VALUES (2, 2, 2, 'Card Reader');

-- Insert data into member table
INSERT INTO member (personID, memberStartDate, membershipType, isActive) 
VALUES (1, TO_DATE('01-01-2023', 'DD-MM-YYYY'), 'Annual', TRUE);
INSERT INTO member (personID, memberStartDate, membershipType, isActive) 
VALUES (2, TO_DATE('15-03-2023', 'DD-MM-YYYY'), 'Monthly', TRUE);
INSERT INTO member (personID, memberStartDate, membershipType, isActive) 
VALUES (3, TO_DATE('10-06-2022', 'DD-MM-YYYY'), 'Quarterly', FALSE);

-- Insert data into maintenanceWorker table
INSERT INTO maintenanceWorker (personID, contactInfo, hireDate) 
VALUES (4, 'rachel@gym.com', TO_DATE('01-02-2020', 'DD-MM-YYYY'));
INSERT INTO maintenanceWorker (personID, contactInfo, hireDate) 
VALUES (5, 'moshe@gym.com', TO_DATE('15-07-2019', 'DD-MM-YYYY'));
INSERT INTO maintenanceWorker (personID, contactInfo, hireDate) 
VALUES (3, 'jacob@gym.com', TO_DATE('10-11-2021', 'DD-MM-YYYY'));

-- Insert data into entryRecord table
INSERT INTO entryRecord (personID, deviceID, zoneID, gymID, entryTime) 
VALUES (1, 1, 1, 1, TO_TIMESTAMP('15-04-2023 08:30:00', 'DD-MM-YYYY HH24:MI:SS'));
INSERT INTO entryRecord (personID, deviceID, zoneID, gymID, entryTime) 
VALUES (2, 2, 2, 1, TO_TIMESTAMP('15-04-2023 09:15:00', 'DD-MM-YYYY HH24:MI:SS'));
INSERT INTO entryRecord (personID, deviceID, zoneID, gymID, entryTime) 
VALUES (3, 3, 3, 1, TO_TIMESTAMP('16-04-2023 10:00:00', 'DD-MM-YYYY HH24:MI:SS'));
INSERT INTO entryRecord (personID, deviceID, zoneID, gymID, entryTime) 
VALUES (1, 1, 1, 2, TO_TIMESTAMP('17-04-2023 11:30:00', 'DD-MM-YYYY HH24:MI:SS'));
INSERT INTO entryRecord (personID, deviceID, zoneID, gymID, entryTime) 
VALUES (2, 2, 2, 2, TO_TIMESTAMP('17-04-2023 14:45:00', 'DD-MM-YYYY HH24:MI:SS'));

-- Insert data into exitRecord table
INSERT INTO exitRecord (personID, deviceID, zoneID, gymID, exitTime) 
VALUES (1, 1, 1, 1, TO_TIMESTAMP('15-04-2023 10:30:00', 'DD-MM-YYYY HH24:MI:SS'));
INSERT INTO exitRecord (personID, deviceID, zoneID, gymID, exitTime) 
VALUES (2, 2, 2, 1, TO_TIMESTAMP('15-04-2023 11:45:00', 'DD-MM-YYYY HH24:MI:SS'));
INSERT INTO exitRecord (personID, deviceID, zoneID, gymID, exitTime) 
VALUES (3, 3, 3, 1, TO_TIMESTAMP('16-04-2023 12:15:00', 'DD-MM-YYYY HH24:MI:SS'));
INSERT INTO exitRecord (personID, deviceID, zoneID, gymID, exitTime) 
VALUES (1, 1, 1, 2, TO_TIMESTAMP('17-04-2023 13:30:00', 'DD-MM-YYYY HH24:MI:SS'));
INSERT INTO exitRecord (personID, deviceID, zoneID, gymID, exitTime) 
VALUES (2, 2, 2, 2, TO_TIMESTAMP('17-04-2023 16:15:00', 'DD-MM-YYYY HH24:MI:SS'));

-- Insert data into repair table
INSERT INTO repair (personID, date, deviceID, zoneID, gymID, specialNotes, serviceType) 
VALUES (4, TO_TIMESTAMP('20-03-2023 00:00:00', 'DD-MM-YYYY HH24:MI:SS'), 1, 1, 1, 'Problem with entrance gate', 'Urgent Repair');
INSERT INTO repair (personID, date, deviceID, zoneID, gymID, specialNotes, serviceType) 
VALUES (5, TO_TIMESTAMP('25-03-2023 00:00:00', 'DD-MM-YYYY HH24:MI:SS'), 2, 2, 1, 'Routine maintenance', 'Maintenance');
INSERT INTO repair (personID, date, deviceID, zoneID, gymID, specialNotes, serviceType) 
VALUES (3, TO_TIMESTAMP('10-04-2023 00:00:00', 'DD-MM-YYYY HH24:MI:SS'), 1, 1, 2, 'Parts replacement', 'Upgrade');
INSERT INTO repair (personID, date, deviceID, zoneID, gymID, specialNotes, serviceType) 
VALUES (4, TO_TIMESTAMP('12-04-2023 00:00:00', 'DD-MM-YYYY HH24:MI:SS'), 3, 3, 1, 'Functionality check', 'Inspection');
INSERT INTO repair (personID, date, deviceID, zoneID, gymID, specialNotes, serviceType) 
VALUES (5, TO_TIMESTAMP('15-04-2023 00:00:00', 'DD-MM-YYYY HH24:MI:SS'), 2, 2, 2, 'Battery replacement', 'Replacement');