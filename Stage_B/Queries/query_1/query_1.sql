-- Returns each gym’s ID, name, city, the number of total entries recorded in the entryRecord table,
-- and the number of zones associated with the gym.
-- Results are ordered in descending order by the number of entries.

SELECT 
    g.gymID,
    g.name AS gymName,
    g.gymLocation AS city,
    COUNT(*) AS numberOfEntries,
    (
        SELECT COUNT(*) 
        FROM zone z2 
        WHERE z2.gymID = g.gymID
    ) AS numberOfZones
FROM 
    entryRecord e
JOIN 
    gym g ON e.gymID = g.gymID
GROUP BY 
    g.gymID, g.name, g.gymLocation
HAVING 
    (
        SELECT COUNT(*) 
        FROM zone z2 
        WHERE z2.gymID = g.gymID
    ) > 3
ORDER BY 
    numberOfEntries DESC;
