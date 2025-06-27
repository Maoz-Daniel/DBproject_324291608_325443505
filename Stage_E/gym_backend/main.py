from database.sql_runner.queries_runner import (
    run_gym_entry_zone_summary,
    run_monthly_entry_summary,
    run_entry_exit_in_busy_zones
)


if __name__ == '__main__':
    print("\n=== סיכום כניסות ואזורים לפי חדר כושר ===")
    gym_entry_zone_summary = run_gym_entry_zone_summary()