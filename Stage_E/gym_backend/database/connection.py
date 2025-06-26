import psycopg2
from config import DB_CONFIG


def get_connection():
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        print("✅ Connected to the database successfully")
        return conn
    except Exception as e:
        print(f"❌ Error connecting to the database: {e}")
        raise
