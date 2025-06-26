from database.connection import get_connection


class MemberManager:
    def __init__(self):
        self.conn = get_connection()
        self.cursor = self.conn.cursor()

    # CREATE
    def create_member(self, person_id, first_name, last_name, date_of_birth,
                       member_start_date, membership_type, is_active=True):
        try:
            # יצירת Person
            self.cursor.execute(
                """
                INSERT INTO person (personid, firstname, lastname, dateofbirth)
                VALUES (%s, %s, %s, %s)
                """,
                (person_id, first_name, last_name, date_of_birth)
            )

            # יצירת Member
            self.cursor.execute(
                """
                INSERT INTO member (personid, memberstartdate, membershiptype, isactive)
                VALUES (%s, %s, %s, %s)
                """,
                (person_id, member_start_date, membership_type, is_active)
            )

            self.conn.commit()
            print("✅ Member created successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error creating member: {e}")

    # READ — חכם (הכל או לפי person_id)
    def read_members(self, person_id=None):
        try:
            if person_id is not None:
                # שליפה של אחד
                self.cursor.execute(
                    """
                    SELECT m.personid, p.firstname, p.lastname, p.dateofbirth,
                           m.memberstartdate, m.membershiptype, m.isactive
                    FROM member m
                    JOIN person p ON m.personid = p.personid
                    WHERE m.personid = %s
                    """,
                    (person_id,)
                )
                return self.cursor.fetchone()
            else:
                # שליפה של כולם
                self.cursor.execute(
                    """
                    SELECT m.personid, p.firstname, p.lastname, p.dateofbirth,
                           m.memberstartdate, m.membershiptype, m.isactive
                    FROM member m
                    JOIN person p ON m.personid = p.personid
                    ORDER BY m.personid
                    """
                )
                return self.cursor.fetchall()
        except Exception as e:
            print(f"❌ Error reading members: {e}")
            return None

    # UPDATE
    def update_member(self, person_id, first_name=None, last_name=None, date_of_birth=None,
                       member_start_date=None, membership_type=None, is_active=None):
        try:
            # עדכון Person
            person_updates = []
            person_params = []

            if first_name is not None:
                person_updates.append("firstname = %s")
                person_params.append(first_name)

            if last_name is not None:
                person_updates.append("lastname = %s")
                person_params.append(last_name)

            if date_of_birth is not None:
                person_updates.append("dateofbirth = %s")
                person_params.append(date_of_birth)

            if person_updates:
                person_params.append(person_id)
                sql = f"""
                    UPDATE person
                    SET {', '.join(person_updates)}
                    WHERE personid = %s
                """
                self.cursor.execute(sql, tuple(person_params))

            # עדכון Member
            member_updates = []
            member_params = []

            if member_start_date is not None:
                member_updates.append("memberstartdate = %s")
                member_params.append(member_start_date)

            if membership_type is not None:
                member_updates.append("membershiptype = %s")
                member_params.append(membership_type)

            if is_active is not None:
                member_updates.append("isactive = %s")
                member_params.append(is_active)

            if member_updates:
                member_params.append(person_id)
                sql = f"""
                    UPDATE member
                    SET {', '.join(member_updates)}
                    WHERE personid = %s
                """
                self.cursor.execute(sql, tuple(member_params))

            if not person_updates and not member_updates:
                print("❗ No fields to update.")
                return

            self.conn.commit()
            print("✅ Member updated successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error updating member: {e}")

    # DELETE
    def delete_member(self, person_id):
        try:
            # מחיקת Member (חובה קודם)
            self.cursor.execute(
                """
                DELETE FROM member
                WHERE personid = %s
                """,
                (person_id,)
            )

            # מחיקת Person
            self.cursor.execute(
                """
                DELETE FROM person
                WHERE personid = %s
                """,
                (person_id,)
            )

            self.conn.commit()
            print("✅ Member deleted successfully.")
        except Exception as e:
            self.conn.rollback()
            print(f"❌ Error deleting member: {e}")

    # CLOSE
    def close(self):
        self.cursor.close()
        self.conn.close()
