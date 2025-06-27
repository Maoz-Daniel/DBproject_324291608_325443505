import psycopg2
import os
from database.connection import get_connection


def execute_sql_file(file_path):
    conn = get_connection()
    cursor = conn.cursor()

    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            sql = file.read()
            cursor.execute(sql)
            conn.commit()
            print(f"✅ Executed {os.path.basename(file_path)} successfully.")
    except Exception as e:
        conn.rollback()
        print(f"❌ Error executing {os.path.basename(file_path)}: {e}")
    finally:
        cursor.close()
        conn.close()
