UPDATE member
SET membershipType = 'Quarterly'
WHERE 
    membershipType = 'Monthly'
    AND personID IN (
        SELECT personID
        FROM entryRecord
        GROUP BY personID
        HAVING COUNT(*) > (
            SELECT AVG(entryCount)
            FROM (
                SELECT COUNT(*) AS entryCount
                FROM entryRecord
                GROUP BY personID
            ) AS entryStats
        )
    );
