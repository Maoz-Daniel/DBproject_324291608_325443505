from gym_backend.database.connection import get_connection

class GymManager:
    def __init__(self):
        self.conn = get_connection()
        self.cursor = self.conn.cursor()

    def read_gyms(self):
        try:
            self.cursor.execute(
                """
                SELECT gymid, name, gymlocation
                FROM gym
                ORDER BY gymid
                """
            )
            rows = self.cursor.fetchall()

            print("✅ Rows fetched:", rows)  # Debug חשוב

            return [
                {
                    "gymid": row[0],
                    "name": row[1],
                    "gymlocation": row[2]
                }
                for row in rows
            ]

        except Exception as e:
            print(f"❌ Error reading gyms: {e}")
            return []

    def close(self):
        self.cursor.close()
        self.conn.close()
