from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from gym_backend.database.models.zone import ZoneManager

router = APIRouter()


# 📦 מודל לנתונים
class Zone(BaseModel):
    zone_id: int
    gym_id: int
    zone_type: str
    only_for_members: bool
    is_accessible: bool


@router.get("/", summary="Get all zones")
def get_zones():
    manager = ZoneManager()
    try:
        zones = manager.read_zones()
        mapped_zones = [
            {
                "zoneid": z[0],
                "gymid": z[1],
                "zonetype": z[2],
                "onlyformembers": z[3],
                "isaccessible": z[4]
            }
            for z in zones
        ]
        return mapped_zones
    finally:
        manager.close()



# ✔️ שליפת אזור לפי מזהה
@router.get("/{zone_id}/{gym_id}", summary="Get zone by zone_id and gym_id")
def get_zone(zone_id: int, gym_id: int):
    manager = ZoneManager()
    try:
        zone = manager.read_zones(zone_id=zone_id, gym_id=gym_id)
        if not zone:
            raise HTTPException(status_code=404, detail="Zone not found")
        return zone
    finally:
        manager.close()


# ✔️ יצירת אזור חדש
@router.post("/", summary="Create a new zone")
def create_zone(zone: Zone):
    manager = ZoneManager()
    try:
        manager.create_zone(
            zone_id=zone.zone_id,
            gym_id=zone.gym_id,
            zone_type=zone.zone_type,
            only_for_members=zone.only_for_members,
            is_accessible=zone.is_accessible
        )
        return {"status": "Zone created successfully"}
    finally:
        manager.close()


# ✔️ עדכון אזור
@router.put("/{zone_id}/{gym_id}", summary="Update a zone")
def update_zone(
    zone_id: int,
    gym_id: int,
    zone_type: Optional[str] = None,
    only_for_members: Optional[bool] = None,
    is_accessible: Optional[bool] = None
):
    manager = ZoneManager()
    try:
        manager.update_zone(
            zone_id=zone_id,
            gym_id=gym_id,
            zone_type=zone_type,
            only_for_members=only_for_members,
            is_accessible=is_accessible
        )
        return {"status": "Zone updated successfully"}
    finally:
        manager.close()


# ✔️ מחיקת אזור
@router.delete("/{zone_id}/{gym_id}", summary="Delete a zone")
def delete_zone(zone_id: int, gym_id: int):
    manager = ZoneManager()
    try:
        manager.delete_zone(zone_id=zone_id, gym_id=gym_id)
        return {"status": "Zone deleted successfully"}
    finally:
        manager.close()
