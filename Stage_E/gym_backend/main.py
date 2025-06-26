from database.models.member import MemberManager


def main():
    manager = MemberManager()

    person_id = 1  # מזהה מנוי לבדיקה (שנה לפי צורך)

    print("\n=== יצירת מנוי ===")
    manager.create_member(
        person_id=person_id,
        first_name="John",
        last_name="Doe",
        date_of_birth="1995-05-15",
        member_start_date="2023-01-01",
        membership_type="Standard",
        is_active=True
    )

    print("\n=== קריאת המנוי ===")
    member = manager.read_members(person_id=person_id)
    if member:
        print(f"📄 המנוי שנמצא: {member}")
    else:
        print("❌ לא נמצא מנוי עם המזהה הזה.")

    print("\n=== עדכון המנוי ===")
    manager.update_member(
        person_id=person_id,
        membership_type="Premium",
        is_active=False
    )
    print("✅ עדכון בוצע.")

    print("\n=== קריאה לאחר עדכון ===")
    member = manager.read_members(person_id=person_id)
    if member:
        print(f"📄 המנוי לאחר עדכון: {member}")
    else:
        print("❌ לא נמצא מנוי עם המזהה הזה.")

    print("\n=== מחיקת המנוי ===")
    manager.delete_member(person_id=person_id)
    print("✅ מחיקה בוצעה.")

    print("\n=== קריאה לאחר מחיקה ===")
    member = manager.read_members(person_id=person_id)
    if member:
        print(f"❗ המנוי עדיין קיים: {member}")
    else:
        print("✔️ המנוי נמחק — לא נמצא במסד הנתונים.")

    manager.close()


if __name__ == "__main__":
    main()
