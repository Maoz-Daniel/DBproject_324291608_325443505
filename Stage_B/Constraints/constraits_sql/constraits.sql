ALTER TABLE maintenanceWorker
ADD CONSTRAINT valid_contact
CHECK (
    contactInfo ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' OR 
    contactInfo ~ '^\+?[0-9]{10,15}$'
);

ALTER TABLE member
ADD CONSTRAINT valid_membership_type
CHECK (
    membershipType IN (
        'Monthly',
        'Annual',
        'Quarterly',
        'Daily',
        'Personal Training'
    )
);

ALTER TABLE entryRecord
ADD CONSTRAINT valid_entry_time
CHECK (entryTime <= CURRENT_TIMESTAMP);
