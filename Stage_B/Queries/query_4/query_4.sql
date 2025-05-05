-- Returns, for each zone in gym ID 184, the average duration of stay in minutes.
-- The result includes the zone ID, the zone type, and the average time people spent in that zone,
-- calculated as the difference between entry and exit times (in minutes),
-- grouped by zone and ordered from longest to shortest average stay.


SELECT 
    z.zoneID,
    z.zoneType,
    ROUND(AVG(EXTRACT(EPOCH FROM (xr.exitTime - er.entryTime)) / 60), 2) AS avgStayMinutes
FROM 
    entryRecord er
NATURAL JOIN 
    exitRecord xr 
NATURAL JOIN
    zone z 
WHERE 
    er.gymID = 184
    AND xr.exitTime IS NOT NULL
GROUP BY 
    z.zoneID, z.zoneType
ORDER BY 
    avgStayMinutes DESC