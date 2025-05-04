UPDATE member
SET isActive = FALSE
WHERE personID IN (
    SELECT personID
    FROM entryRecord
    GROUP BY personID
    HAVING 
        MAX(entryTime) < CURRENT_DATE - INTERVAL '3 months'
        AND COUNT(*) >= 3
);
