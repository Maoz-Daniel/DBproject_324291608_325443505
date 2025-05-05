-- Returns, for each gym and for each month in the year 2025, the following:
-- the gym's ID, name, city, the year and month of the entry, and the number of entries.
-- Results are grouped by gym and by month, and ordered by gym ID, year, and month.

SELECT g.gymID,
    g.name AS gymName,
    g.gymLocation AS city,
    EXTRACT(YEAR FROM e.entryTime) AS entryYear,
    EXTRACT(MONTH FROM e.entryTime) AS entryMonth,
    COUNT(*) AS numberOfEntries
FROM 
    entryRecord e
JOIN 
    gym g ON e.gymID = g.gymID
WHERE 
    EXTRACT(YEAR FROM e.entryTime) = 2025
GROUP BY 
    g.gymID, g.name, g.gymLocation, entryYear, entryMonth
ORDER BY 
    g.gymID, entryYear, entryMonth