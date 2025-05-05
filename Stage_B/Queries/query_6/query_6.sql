-- Returns gyms that have both more than 2 inaccessible zones 
-- and more than 2 entries recorded.

(
    SELECT 
        g.gymID,
        g.name,
        g.gymLocation
    FROM 
        zone z
    NATURAL JOIN gym g
    WHERE 
        z.isAccessible = FALSE
    GROUP BY 
        g.gymID, g.name, g.gymLocation
    HAVING 
        COUNT(*) >= 2
)
INTERSECT
(
    SELECT 
        g.gymID,
        g.name,
        g.gymLocation
    FROM 
        entryRecord e
    NATURAL JOIN gym g
    GROUP BY 
        g.gymID, g.name, g.gymLocation
    HAVING 
        COUNT(*) > 2
)
ORDER BY 
    name;
