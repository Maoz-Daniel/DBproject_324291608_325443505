
-- Returns a cursor with details of visits longer than a specified duration threshold
CREATE OR REPLACE FUNCTION get_long_visits_cursor(duration_threshold INTERVAL)
RETURNS REFCURSOR AS $$
DECLARE
    ref REFCURSOR := 'ref';
BEGIN
    IF duration_threshold IS NULL THEN
        RAISE EXCEPTION 'Duration threshold cannot be null';
    END IF;

    OPEN ref FOR
    SELECT
        ER.personid,
        P.firstname,
        P.lastname,
        ER.entrytime,
        XR.exittime,
        XR.exittime - ER.entrytime AS duration,
        ER.gymid,
        CASE
            WHEN XR.exittime - ER.entrytime > INTERVAL '6 hours' THEN 'CRITICAL'
            WHEN XR.exittime - ER.entrytime > INTERVAL '3 hours' THEN 'WARNING'
            ELSE 'OK'
        END AS riskLevel
    FROM entryrecord ER
    NATURAL JOIN exitrecord XR
    NATURAL JOIN person P
    WHERE XR.exittime - ER.entrytime > duration_threshold
    ORDER BY duration DESC;

    RETURN ref;
END;
$$ LANGUAGE plpgsql;
