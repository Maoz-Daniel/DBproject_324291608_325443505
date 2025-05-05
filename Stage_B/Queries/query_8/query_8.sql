-- Returns device types with fewer exits than the average number of exits per device type.

SELECT 
    d.deviceType,
    COUNT(*) AS numberOfExits
FROM 
    exitRecord xr
JOIN 
    accessDevice d ON xr.deviceID = d.deviceID
GROUP BY 
    d.deviceType
HAVING 
    COUNT(*) < (
        SELECT AVG(device_exit_counts.exitCount)
        FROM (
            SELECT COUNT(*) AS exitCount
            FROM exitRecord xr2
            JOIN accessDevice d2 ON xr2.deviceID = d2.deviceID
            GROUP BY d2.deviceType
        ) AS device_exit_counts
    )
ORDER BY 
    numberOfExits ASC;
