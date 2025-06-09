-- procedure to update job costs based on service type and date condition
CREATE OR REPLACE PROCEDURE update_jobs_cost_by_type(
    IN service_type_input TEXT,
    IN base_cost NUMERIC
)
LANGUAGE plpgsql
AS $$
DECLARE
    rec RECORD;
    updated_count INT := 0;
BEGIN
    -- check if there are any matching jobs
    IF NOT EXISTS (
        SELECT 1 FROM job WHERE servicetype = service_type_input
    ) THEN
        RAISE EXCEPTION 'No jobs found with service type: %', service_type_input;
    END IF;

    -- loop through each matching job and update cost conditionally
    FOR rec IN
        SELECT jobid, date
        FROM job
        WHERE servicetype = service_type_input
    LOOP
        IF EXTRACT(DAY FROM rec.date) BETWEEN 1 AND 15 THEN
            UPDATE job
            SET cost = base_cost * 1.5
            WHERE jobid = rec.jobid;
        ELSE
            UPDATE job
            SET cost = base_cost
            WHERE jobid = rec.jobid;
        END IF;

        updated_count := updated_count + 1;
    END LOOP;

    RAISE NOTICE 'Updated % jobs of type %', updated_count, service_type_input;
END;
$$;
