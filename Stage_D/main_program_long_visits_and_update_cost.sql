
BEGIN;

-- create a cursor to fetch long visits
SELECT get_long_visits_cursor(INTERVAL '3 hours');

-- open the cursor
FETCH ALL FROM ref;

-- call the procedure to update long visits
CALL update_jobs_cost_by_type('Inspection', 100);

COMMIT;
