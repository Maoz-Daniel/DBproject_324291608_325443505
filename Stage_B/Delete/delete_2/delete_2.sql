DELETE FROM member
WHERE 
    isActive = FALSE
    AND personID NOT IN (
        SELECT DISTINCT personID FROM entryRecord
    );
