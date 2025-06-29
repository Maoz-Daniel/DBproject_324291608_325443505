from gym_backend.database.connection import get_connection


class ZoneManager:
    def __init__(self):
        self.conn = get_connection()
        self.cursor = self.conn.cursor()

    # CREATE
    def create_zone(self, zone_id, gym_id, zone_type, only_for_members, is_accessible):
        try:
            self.cursor.execute(
                """
                INSERT INTO zone (zoneid, gymid, zonetype, onlyformembers, isaccessible)
                VALUES (%s, %s, %s, %s, %s)
                """,
                (zone_id, gym_id, zone_type, only_for_members, is_accessible)
            )
            self.conn.commit()
            print("✅ Zone created successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error creating zone: {e}")

    def read_zones(self, zone_id=None, gym_id=None):
        try:
            query = """
                SELECT 
                    z.zoneid,
                    z.gymid,
                    z.zonetype,
                    z.onlyformembers,
                    z.isaccessible,
                    g.name AS gymname,
                    g.gymlocation AS city
                FROM zone z
                JOIN gym g ON z.gymid = g.gymid
            """
            params = []

            if zone_id is not None and gym_id is not None:
                query += " WHERE z.zoneid = %s AND z.gymid = %s"
                params = [zone_id, gym_id]

            query += " ORDER BY z.gymid, z.zoneid"

            self.cursor.execute(query, tuple(params))
            if params:
                return self.cursor.fetchone()
            else:
                return self.cursor.fetchall()

        except Exception as e:
            print(f"❌ Error reading zones: {e}")
            return None
        
    # UPDATE
    def update_zone(self, zone_id, gym_id, zone_type=None, only_for_members=None, is_accessible=None):
        try:
            update_fields = []
            params = []

            if zone_type is not None:
                update_fields.append("zonetype = %s")
                params.append(zone_type)

            if only_for_members is not None:
                update_fields.append("onlyformembers = %s")
                params.append(only_for_members)

            if is_accessible is not None:
                update_fields.append("isaccessible = %s")
                params.append(is_accessible)

            if not update_fields:
                print("❗ No fields to update.")
                return

            params.extend([zone_id, gym_id])

            sql = f"""
                UPDATE zone
                SET {', '.join(update_fields)}
                WHERE zoneid = %s AND gymid = %s
            """

            self.cursor.execute(sql, tuple(params))
            self.conn.commit()
            print("✅ Zone updated successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error updating zone: {e}")

    # DELETE
    def delete_zone(self, zone_id, gym_id):
        try:
            self.cursor.execute(
                """
                DELETE FROM zone
                WHERE zoneid = %s AND gymid = %s
                """,
                (zone_id, gym_id)
            )
            self.conn.commit()
            print("✅ Zone deleted successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error deleting zone: {e}")

    # CLOSE
    def close(self):
        self.cursor.close()
        self.conn.close()
