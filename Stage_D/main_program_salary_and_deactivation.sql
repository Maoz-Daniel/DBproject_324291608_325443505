
BEGIN;

-- selecting employees with salary summary
SELECT * FROM get_employees_salary_summary();

-- call the procedure to deactivate old members
CALL deactivate_old_members(18);

COMMIT;
