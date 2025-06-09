-- This script creates a trigger to validate that a person is an active member before inserting an entry record.
CREATE OR REPLACE FUNCTION validate_active_member()
RETURNS TRIGGER AS $$
DECLARE
    active_status BOOLEAN;
BEGIN
    -- Check if the person is an active member
    SELECT isactive INTO active_status
    FROM member
    WHERE personid = NEW.personid;

    -- If the member is not active (or not found), raise an error
    IF active_status IS DISTINCT FROM TRUE THEN
        RAISE EXCEPTION 'Entry denied: Person % is not an active member.', NEW.personid;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- Create the trigger to call the function before inserting into entryrecord
CREATE TRIGGER trg_validate_entry_active_member
BEFORE INSERT ON entryrecord
FOR EACH ROW
EXECUTE FUNCTION validate_active_member();
