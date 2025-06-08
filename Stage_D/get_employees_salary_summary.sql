-- Function to get a summary of employees' salaries
CREATE OR REPLACE FUNCTION get_employees_salary_summary()
RETURNS TABLE (
    personID INT,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    num_jobs BIGINT,
    total_salary NUMERIC
) AS $$
BEGIN
    -- raise an exception if there are no job records
    IF NOT EXISTS (SELECT 1 FROM job) THEN
        RAISE EXCEPTION 'No job records found in the system';
    END IF;

    -- update NULL salary values to 60 
    UPDATE job
    SET cost = 60
    WHERE cost IS NULL;

    -- return salary summary for each employee
    RETURN QUERY
    SELECT
        p.personID,
        p.firstName,
        p.lastName,
        COUNT(j.jobID) AS num_jobs,
        SUM(j.cost) AS total_salary
    FROM job j
    JOIN person p ON j.personID = p.personID
    GROUP BY p.personID, p.firstName, p.lastName
    ORDER BY total_salary DESC;
END;
$$ LANGUAGE plpgsql;
