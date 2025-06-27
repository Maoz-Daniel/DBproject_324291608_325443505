from .sql_executor import execute_sql_file
from database.connection import get_connection


def run_query_and_fetch_results(file_path):
    conn = get_connection()
    cursor = conn.cursor()

    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            query = file.read()

        cursor.execute(query)
        results = cursor.fetchall()

        print(f"✅ Query {file_path} executed successfully. Results:")
        for row in results:
            print(row)

        return results

    except Exception as e:
        print(f" Error executing query {file_path}: {e}")
        return None

    finally:
        cursor.close()
        conn.close()


def run_gym_entry_zone_summary():
    return run_query_and_fetch_results('Stage_B/Queries/query_1/query_1.sql')


def run_active_members_no_entry_since():
    return run_query_and_fetch_results('Stage_B/Queries/query_2/query_2.sql')


def run_monthly_entry_summary():
    return run_query_and_fetch_results('Stage_B/Queries/query_3/query_3.sql')


def run_avg_stay_per_zone_in_gym_184():
    return run_query_and_fetch_results('Stage_B/Queries/query_4/query_4.sql')


def run_gyms_with_more_than_5_repairs():
    return run_query_and_fetch_results('Stage_B/Queries/query_5/query_5.sql')


def run_gyms_with_inaccessible_zones_and_entries():
    return run_query_and_fetch_results('Stage_B/Queries/query_6/query_6.sql')


def run_entry_exit_in_busy_zones():
    return run_query_and_fetch_results('Stage_B/Queries/query_7/query_7.sql')


def run_devices_with_below_avg_exits():
    return run_query_and_fetch_results('Stage_B/Queries/query_8/query_8.sql')
