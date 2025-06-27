from database.connection import get_connection


class ExitManager:
    def __init__(self):
        self.conn = get_connection()
        self.cursor = self.conn.cursor()

    # CREATE
    def create_exit(self, person_id, device_id, zone_id, gym_id, exit_time):
        try:
            self.cursor.execute(
                """
                INSERT INTO exitrecord (personid, deviceid, zoneid, gymid, exittime)
                VALUES (%s, %s, %s, %s, %s)
                """,
                (person_id, device_id, zone_id, gym_id, exit_time)
            )
            self.conn.commit()
            print("✅ Exit created successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error creating exit: {e}")

    # READ
    def read_exit(self, person_id=None, exit_time=None):
        try:
            if person_id is not None and exit_time is not None:
                self.cursor.execute(
                    """
                    SELECT * FROM exitrecord
                    WHERE personid = %s AND exittime = %s
                    """,
                    (person_id, exit_time)
                )
                return self.cursor.fetchone()
            else:
                self.cursor.execute(
                    """
                    SELECT * FROM exitrecord
                    ORDER BY exittime
                    """
                )
                return self.cursor.fetchall()
        except Exception as e:
            print(f"❌ Error reading exit: {e}")
            return None

    # UPDATE
    def update_exit(self, person_id, exit_time,
                     device_id=None, zone_id=None, gym_id=None):
        try:
            updates = []
            params = []

            if device_id is not None:
                updates.append("deviceid = %s")
                params.append(device_id)
            if zone_id is not None:
                updates.append("zoneid = %s")
                params.append(zone_id)
            if gym_id is not None:
                updates.append("gymid = %s")
                params.append(gym_id)

            if not updates:
                print("❗ No fields to update.")
                return

            params.extend([person_id, exit_time])

            sql = f"""
                UPDATE exitrecord
                SET {', '.join(updates)}
                WHERE personid = %s AND exittime = %s
            """

            self.cursor.execute(sql, tuple(params))
            self.conn.commit()
            print("✅ Exit updated successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error updating exit: {e}")

    # DELETE
    def delete_exit(self, person_id, exit_time):
        try:
            self.cursor.execute(
                """
                DELETE FROM exitrecord
                WHERE personid = %s AND exittime = %s
                """,
                (person_id, exit_time)
            )
            self.conn.commit()
            print("✅ Exit deleted successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error deleting exit: {e}")

    # CLOSE
    def close(self):
        self.cursor.close()
        self.conn.close()
