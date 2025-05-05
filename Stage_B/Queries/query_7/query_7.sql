-- Returns entries and exits only from zones that had more than 80 total entries.

SELECT 
    g.name AS gymName,
    g.gymLocation AS city,
    z.zoneType AS zoneName,
    p.firstName,
    p.lastName,
    er.entryTime,
    xr.exitTime
FROM 
    entryRecord er
NATURAL JOIN exitRecord xr
NATURAL JOIN zone z
NATURAL JOIN gym g
NATURAL JOIN person p
WHERE 
    er.zoneID IN (
        SELECT zoneID
        FROM entryRecord
        GROUP BY zoneID
        HAVING COUNT(*) > 80
    )
ORDER BY 
    g.name, p.lastName, p.firstName, er.entryTime;
