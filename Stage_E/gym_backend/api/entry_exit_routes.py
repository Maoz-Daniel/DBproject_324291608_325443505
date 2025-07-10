from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from typing import Optional
from gym_backend.database.models.entry import EntryManager
from gym_backend.database.models.exit import ExitManager
from gym_backend.database.connection import get_connection
from datetime import datetime

router = APIRouter()

# 📦 מודלים לכניסה וליציאה
class Entry(BaseModel):
    person_id: int = Field(..., alias="personid")
    device_id: int = Field(..., alias="deviceid")
    zone_id: int = Field(..., alias="zoneid")
    gym_id: int = Field(..., alias="gymid")
    entry_time: datetime = Field(..., alias="entrytime")

    class Config:
        allow_population_by_field_name = True


class Exit(BaseModel):
    person_id: int = Field(..., alias="personid")
    device_id: int = Field(..., alias="deviceid")
    zone_id: int = Field(..., alias="zoneid")
    gym_id: int = Field(..., alias="gymid")
    exit_time: datetime = Field(..., alias="exittime")

    class Config:
        allow_population_by_field_name = True


class EntryUpdate(BaseModel):
    person_id: int
    entry_time: str
    device_id: Optional[int] = None
    zone_id: Optional[int] = None
    gym_id: Optional[int] = None


class ExitUpdate(BaseModel):
    person_id: int
    exit_time: str
    device_id: Optional[int] = None
    zone_id: Optional[int] = None
    gym_id: Optional[int] = None


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


@router.post("/entries", summary="Create entry")
def create_entry(entry: Entry):
    manager = EntryManager()
    try:
        manager.create_entry(
            person_id=entry.person_id,
            device_id=entry.device_id,
            zone_id=entry.zone_id,
            gym_id=entry.gym_id,
            entry_time=str(entry.entry_time)
        )
        return {"status": "Entry created successfully"}

    except Exception as e:
        handle_db_error(e, "Entry")
    finally:
        manager.close()


@router.put("/entries", summary="Update entry")
def update_entry(update: EntryUpdate):
    manager = EntryManager()
    try:
        manager.update_entry(
            person_id=update.person_id,
            entry_time=update.entry_time,
            device_id=update.device_id,
            zone_id=update.zone_id,
            gym_id=update.gym_id
        )
        return {"status": "Entry updated successfully"}

    except Exception as e:
        handle_db_error(e, "Entry")
    finally:
        manager.close()


@router.delete("/entries", summary="Delete entry")
def delete_entry(person_id: int, entry_time: str):
    manager = EntryManager()
    try:
        manager.delete_entry(person_id, entry_time)
        return {"status": "Entry deleted successfully"}

    except Exception as e:
        handle_db_error(e, "Entry")
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


@router.post("/exits", summary="Create exit")
def create_exit(exit: Exit):
    manager = ExitManager()
    try:
        manager.create_exit(
            person_id=exit.person_id,
            device_id=exit.device_id,
            zone_id=exit.zone_id,
            gym_id=exit.gym_id,
            exit_time=str(exit.exit_time)
        )
        return {"status": "Exit created successfully"}

    except Exception as e:
        handle_db_error(e, "Exit")
    finally:
        manager.close()


@router.put("/exits", summary="Update exit")
def update_exit(update: ExitUpdate):
    manager = ExitManager()
    try:
        manager.update_exit(
            person_id=update.person_id,
            exit_time=update.exit_time,
            device_id=update.device_id,
            zone_id=update.zone_id,
            gym_id=update.gym_id
        )
        return {"status": "Exit updated successfully"}

    except Exception as e:
        handle_db_error(e, "Exit")
    finally:
        manager.close()


@router.delete("/exits", summary="Delete exit")
def delete_exit(person_id: int, exit_time: str):
    manager = ExitManager()
    try:
        manager.delete_exit(person_id, exit_time)
        return {"status": "Exit deleted successfully"}

    except Exception as e:
        handle_db_error(e, "Exit")
    finally:
        manager.close()


# ======================================
# 🎯 פונקציית טיפול בשגיאות DB
# ======================================

def handle_db_error(e: Exception, entity: str):
    error_message = str(e)
    print(f"❌ Database error on {entity.lower()}: {error_message}")

    # שגיאות ייחודיות שזרקת מהפונקציות ב־PL/pgSQL
    if "must exit before entering again" in error_message or "No open entry exists" in error_message:
        raise HTTPException(status_code=400, detail=error_message)

    # שגיאות מפתחות זרים
    if "violates foreign key constraint" in error_message:
        if "accessdevice" in error_message:
            raise HTTPException(
                status_code=400,
                detail="❌ Access Device does not exist for this zone and gym. Please check deviceid, zoneid, and gymid."
            )
        if "person" in error_message:
            raise HTTPException(
                status_code=400,
                detail="❌ Person ID does not exist."
            )
        if "zone" in error_message:
            raise HTTPException(
                status_code=400,
                detail="❌ Zone does not exist in this gym."
            )
        if "gym" in error_message:
            raise HTTPException(
                status_code=400,
                detail="❌ Gym does not exist."
            )
        raise HTTPException(
            status_code=400,
            detail=f"❌ Foreign key constraint failed: {error_message}"
        )

    raise HTTPException(status_code=500, detail=error_message)
