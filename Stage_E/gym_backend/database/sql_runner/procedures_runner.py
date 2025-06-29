from .sql_executor import execute_sql_file
from gym_backend.database.connection import get_connection


def run_deactivate_old_members(months_threshold):

    conn = get_connection()
    cursor = conn.cursor()

    try:
        print(f"🔍 Running deactivate_old_members for members inactive over {months_threshold} months...")

        cursor.execute(f"CALL deactivate_old_members({months_threshold});")
        conn.commit()

        print("✅ Procedure deactivate_old_members executed successfully.")

    except Exception as e:
        conn.rollback()
        print(f"❌ Error running deactivate_old_members: {e}")

    finally:
        cursor.close()
        conn.close()

def run_update_jobs_cost_by_type(service_type, base_cost):
    """
    מריץ את הפרוצדורה update_jobs_cost_by_type שמעדכנת עלות עבודות לפי סוג שירות.

    :param service_type: מחרוזת של סוג השירות (לדוגמה 'Inspection')
    :param base_cost: עלות הבסיס (מספר)
    """
    conn = get_connection()
    cursor = conn.cursor()

    try:
        print(f"🔍 Running update_jobs_cost_by_type for service '{service_type}' with base cost {base_cost}...")

        cursor.execute(
            f"CALL update_jobs_cost_by_type(%s, %s);",
            (service_type, base_cost)
        )
        conn.commit()

        print("✅ Procedure update_jobs_cost_by_type executed successfully.")

    except Exception as e:
        conn.rollback()
        print(f"❌ Error running update_jobs_cost_by_type: {e}")

    finally:
        cursor.close()
        conn.close()
