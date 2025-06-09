-- This procedure deactivates members who have been active for more than a specified number of months.

CREATE OR REPLACE PROCEDURE deactivate_old_members(months_threshold INT)
LANGUAGE plpgsql
AS $$
DECLARE
    rec RECORD;
    updated_count INT := 0;
BEGIN
    -- validate input
    IF months_threshold <= 0 THEN
        RAISE EXCEPTION 'Invalid threshold: must be greater than 0. Given: %', months_threshold;
    END IF;

    -- loop over relevant members (joined with person to get names)
    FOR rec IN
    SELECT m.personid, p.firstname, p.lastname, m.memberstartdate
    FROM member m
    JOIN person p ON m.personid = p.personid
    WHERE m.membershiptype IN ('Basic', 'Standard')
      AND m.memberstartdate < CURRENT_DATE - make_interval(months := months_threshold)
      AND m.isactive = true

    LOOP
        UPDATE member
        SET isactive = false
        WHERE personid = rec.personid;

        updated_count := updated_count + 1;

        RAISE NOTICE 'Deactivated: % % (%), joined on %',
            rec.firstname, rec.lastname, rec.personid, rec.memberstartdate;
    END LOOP;

    -- if no members were updated, raise an exception
    IF updated_count = 0 THEN
        RAISE EXCEPTION 'No members found who meet the criteria for deactivation.';
    END IF;
END;
$$;
