        -- Returns the name, city, and number of repairs for each gym.
        -- Only gyms with more than 5 repairs are included.
        -- Results are grouped by gym and sorted in descending order based on the number of repairs.

        SELECT 
            g.name AS gymName,
            g.gymLocation AS city,
            COUNT(*) AS numberOfRepairs
        FROM 
            repair r
        NATURAL JOIN 
            gym g 
        GROUP BY 
            g.gymID, g.name, g.gymLocation
        HAVING 
            COUNT(*) > 5
        ORDER BY 
            numberOfRepairs DESC;
