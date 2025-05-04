UPDATE member
SET membershipType = 'Expired'
WHERE 
    isActive = FALSE
    AND NOT EXISTS (
        SELECT 1
        FROM entryRecord e
        WHERE e.personID = member.personID
    );
