DELETE FROM member
WHERE 
    isActive = FALSE
    AND personID NOT IN (
        SELECT DISTINCT personID FROM entryRecord
    )
    AND personID IN (
        SELECT personID
        FROM person
        WHERE dateOfBirth > '2000-01-01'
    );
