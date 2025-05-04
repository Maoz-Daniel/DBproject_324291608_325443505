DELETE FROM person
WHERE personID IN (
    SELECT personID
    FROM repair
    GROUP BY personID
    HAVING COUNT(DISTINCT deviceID) = 1
);
