from gym_backend.database.connection import get_connection


class EntryManager:
    def __init__(self):
        self.conn = get_connection()
        self.cursor = self.conn.cursor()

    # CREATE
    def create_entry(self, person_id, device_id, zone_id, gym_id, entry_time):
        try:
            self.cursor.execute(
                """
                INSERT INTO entryrecord (personid, deviceid, zoneid, gymid, entrytime)
                VALUES (%s, %s, %s, %s, %s)
                """,
                (person_id, device_id, zone_id, gym_id, entry_time)
            )
            self.conn.commit()
            print("✅ Entry created successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error creating entry: {e}")

    # READ
    def read_entry(self, person_id=None, entry_time=None):
        try:
            if person_id is not None and entry_time is not None:
                self.cursor.execute(
                    """
                    SELECT * FROM entryrecord
                    WHERE personid = %s AND entrytime = %s
                    """,
                    (person_id, entry_time)
                )
                return self.cursor.fetchone()
            else:
                self.cursor.execute(
                    """
                    SELECT * FROM entryrecord
                    ORDER BY entrytime
                    """
                )
                return self.cursor.fetchall()
        except Exception as e:
            print(f"❌ Error reading entry: {e}")
            return None

    # UPDATE
    def update_entry(self, person_id, entry_time,
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

            params.extend([person_id, entry_time])

            sql = f"""
                UPDATE entryrecord
                SET {', '.join(updates)}
                WHERE personid = %s AND entrytime = %s
            """

            self.cursor.execute(sql, tuple(params))
            self.conn.commit()
            print("✅ Entry updated successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error updating entry: {e}")

    # DELETE
    def delete_entry(self, person_id, entry_time):
        try:
            self.cursor.execute(
                """
                DELETE FROM entryrecord
                WHERE personid = %s AND entrytime = %s
                """,
                (person_id, entry_time)
            )
            self.conn.commit()
            print("✅ Entry deleted successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error deleting entry: {e}")

    # CLOSE
    def close(self):
        self.cursor.close()
        self.conn.close()
