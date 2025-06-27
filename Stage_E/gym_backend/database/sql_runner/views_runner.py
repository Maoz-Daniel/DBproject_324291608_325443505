from .sql_executor import execute_sql_file


def run_zone_visit_stats_view():
    execute_sql_file('Stage_C/Views.sql')
