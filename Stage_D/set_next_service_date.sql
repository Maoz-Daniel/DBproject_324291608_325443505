-- Function to set the next service date based on the job's service date
CREATE OR REPLACE FUNCTION set_next_service_date()
RETURNS TRIGGER AS $$
DECLARE
    job_service_date DATE;
BEGIN
    --run only when the column was omitted 
    IF NEW.nextServiceDate IS NULL THEN
        --fetch the service date from the related job record 
        SELECT date
        INTO   job_service_date
        FROM   job
        WHERE  jobid = NEW.jobid;

        --basic safety check
        IF job_service_date IS NULL THEN
            RAISE EXCEPTION
              'Cannot derive nextServiceDate: job % has no service date.',
              NEW.jobid;
        END IF;

        --add six months and assign 
        NEW.nextServiceDate :=
            (job_service_date + INTERVAL '6 months')::date;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger to call the function before inserting or updating in maintenance
CREATE TRIGGER trg_set_next_service_date
BEFORE INSERT OR UPDATE ON maintenance
FOR EACH ROW
EXECUTE FUNCTION set_next_service_date();