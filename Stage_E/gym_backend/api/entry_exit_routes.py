from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from gym_backend.database.models.entry import EntryManager
from gym_backend.database.models.exit import ExitManager
from gym_backend.database.connection import get_connection

router = APIRouter()


# 📦 מודלים לכניסה וליציאה
class Entry(BaseModel):
    person_id: int
    device_id: int
    zone_id: int
    gym_id: int
    entry_time: str  # פורמט: YYYY-MM-DD HH:MM:SS


class Exit(BaseModel):
    person_id: int
    device_id: int
    zone_id: int
    gym_id: int
    exit_time: str  # פורמט: YYYY-MM-DD HH:MM:SS


# ======================================
# כניסות (Entries)
# ======================================

@router.get("/entries")
def get_entries():
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            SELECT 
                e.personid, 
                p.firstname, 
                p.lastname,
                e.deviceid, 
                e.zoneid, 
                e.gymid, 
                e.entrytime
            FROM entryrecord e
            JOIN person p ON e.personid = p.personid
        """)
        
        rows = cursor.fetchall()

        entries = [
            {
                "personid": row[0],
                "firstname": row[1],
                "lastname": row[2],
                "deviceid": row[3],
                "zoneid": row[4],
                "gymid": row[5],
                "entrytime": row[6],
            }
            for row in rows
        ]

        return entries
    except Exception as e:
        print(f"❌ Error reading entries: {e}")
        return {"error": str(e)}
    finally:
        cursor.close()
        conn.close()




# ✔️ הוספת כניסה
@router.post("/entries", summary="Create entry")
def create_entry(entry: Entry):
    manager = EntryManager()
    try:
        manager.create_entry(
            person_id=entry.person_id,
            device_id=entry.device_id,
            zone_id=entry.zone_id,
            gym_id=entry.gym_id,
            entry_time=entry.entry_time
        )
        return {"status": "Entry created successfully"}
    finally:
        manager.close()


# ✔️ עדכון כניסה
@router.put("/entries", summary="Update entry")
def update_entry(
    person_id: int,
    entry_time: str,
    device_id: Optional[int] = None,
    zone_id: Optional[int] = None,
    gym_id: Optional[int] = None
):
    manager = EntryManager()
    try:
        manager.update_entry(
            person_id=person_id,
            entry_time=entry_time,
            device_id=device_id,
            zone_id=zone_id,
            gym_id=gym_id
        )
        return {"status": "Entry updated successfully"}
    finally:
        manager.close()


# ✔️ מחיקת כניסה
@router.delete("/entries", summary="Delete entry")
def delete_entry(person_id: int, entry_time: str):
    manager = EntryManager()
    try:
        manager.delete_entry(person_id, entry_time)
        return {"status": "Entry deleted successfully"}
    finally:
        manager.close()


# ======================================
# יציאות (Exits)
# ======================================

@router.get("/exits")
def get_exits():
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            SELECT 
                e.personid, 
                p.firstname, 
                p.lastname,
                e.deviceid, 
                e.zoneid, 
                e.gymid, 
                e.exittime
            FROM exitrecord e
            JOIN person p ON e.personid = p.personid
        """)
        
        rows = cursor.fetchall()

        exits = [
            {
                "personid": row[0],
                "firstname": row[1],
                "lastname": row[2],
                "deviceid": row[3],
                "zoneid": row[4],
                "gymid": row[5],
                "exittime": row[6],
            }
            for row in rows
        ]

        return exits
    except Exception as e:
        print(f"❌ Error reading exits: {e}")
        return {"error": str(e)}
    finally:
        cursor.close()
        conn.close()




# ✔️ הוספת יציאה
@router.post("/exits", summary="Create exit")
def create_exit(exit: Exit):
    manager = ExitManager()
    try:
        manager.create_exit(
            person_id=exit.person_id,
            device_id=exit.device_id,
            zone_id=exit.zone_id,
            gym_id=exit.gym_id,
            exit_time=exit.exit_time
        )
        return {"status": "Exit created successfully"}
    finally:
        manager.close()


# ✔️ עדכון יציאה
@router.put("/exits", summary="Update exit")
def update_exit(
    person_id: int,
    exit_time: str,
    device_id: Optional[int] = None,
    zone_id: Optional[int] = None,
    gym_id: Optional[int] = None
):
    manager = ExitManager()
    try:
        manager.update_exit(
            person_id=person_id,
            exit_time=exit_time,
            device_id=device_id,
            zone_id=zone_id,
            gym_id=gym_id
        )
        return {"status": "Exit updated successfully"}
    finally:
        manager.close()


# ✔️ מחיקת יציאה
@router.delete("/exits", summary="Delete exit")
def delete_exit(person_id: int, exit_time: str):
    manager = ExitManager()
    try:
        manager.delete_exit(person_id, exit_time)
        return {"status": "Exit deleted successfully"}
    finally:
        manager.close()
