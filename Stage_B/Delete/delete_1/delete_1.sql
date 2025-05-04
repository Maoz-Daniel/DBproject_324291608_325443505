DELETE FROM gym
WHERE gymID IN (
    SELECT g.gymID
    FROM gym g
    LEFT JOIN zone z ON g.gymID = z.gymID
    WHERE 
        g.gymLocation IN ('Acre', 'Petah Tikva')
        AND EXISTS (
            SELECT 1
            FROM zone z2
            WHERE z2.gymID = g.gymID AND z2.isAccessible = TRUE
        )
    GROUP BY g.gymID
    HAVING COUNT(z.zoneID) < 2
);
