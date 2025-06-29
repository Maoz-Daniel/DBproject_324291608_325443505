from .sql_executor import execute_sql_file
from gym_backend.database.connection import get_connection


def run_get_long_visits_cursor(duration_threshold):
    """
    מריץ את פונקציית get_long_visits_cursor ומחזיר את רשימת השהיות הארוכות.

    :param duration_threshold: מחרוזת זמן בפורמט PostgreSQL, למשל '3 hours' או '2 hours'
    :return: רשימת רשומות תואמות
    """
    conn = get_connection()
    cursor = conn.cursor()

    try:
        print(f"🔍 Running get_long_visits_cursor for interval {duration_threshold}...")

        # קריאה לפונקציה
        cursor.execute(f"SELECT get_long_visits_cursor(INTERVAL '{duration_threshold}');")

        # קריאה לנתונים מתוך ה־ref cursor
        cursor.execute("FETCH ALL FROM ref;")
        results = cursor.fetchall()

        if not results:
            print("ℹ️ No long visits found.")
        else:
            print("📄 Results:")
            for row in results:
                print(row)

        return results

    except Exception as e:
        print(f"❌ Error running get_long_visits_cursor: {e}")
        return None
    finally:
        cursor.close()
        conn.close()


from gym_backend.database.connection import get_connection


def run_get_employees_salary_summary():
    conn = get_connection()
    cursor = conn.cursor()

    try:
        print("🔍 Running get_employees_salary_summary...")

        cursor.execute("SELECT * FROM get_employees_salary_summary();")
        results = cursor.fetchall()

        if not results:
            print("ℹ️ No job data found for employees.")
        else:
            print("📄 Results:")
            for row in results:
                print(row)

        return results

    except Exception as e:
        print(f"Error running get_employees_salary_summary: {e}")
        return None

    finally:
        cursor.close()
        conn.close()

