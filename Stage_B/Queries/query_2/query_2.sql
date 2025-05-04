-- Returns the first name, last name, date of birth, and membership type
-- for all active members who have not entered any gym 
-- since January 3rd, 2025 (inclusive).

SELECT p.firstName, p.lastName, p.dateOfBirth, m.membershipType
FROM 
    member m
JOIN 
    person p ON m.personID = p.personID
WHERE 
    m.isActive = TRUE
    AND NOT EXISTS (
        SELECT 1
        FROM entryRecord e
        WHERE e.personID = m.personID
          AND e.entryTime >= '2025-01-03 00:00:00'
    );