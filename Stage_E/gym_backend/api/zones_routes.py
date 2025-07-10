from fastapi import APIRouter, HTTPException
import psycopg2
from pydantic import BaseModel
from typing import Optional
from gym_backend.database.models.zone import ZoneManager

router = APIRouter()


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
                "isaccessible": z[4],
                "gymname": z[5],       
                "city": z[6]  
            }
            for z in zones
        ]
        return mapped_zones
    finally:
        manager.close()



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
    except Exception as e:
        handle_db_error(e, "Zone")
    finally:
        manager.close()


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
    except Exception as e:
        handle_db_error(e, "Zone")
    finally:
        manager.close()



@router.delete("/{zone_id}/{gym_id}", summary="Delete a zone")
def delete_zone(zone_id: int, gym_id: int):
    manager = ZoneManager()
    try:
        manager.delete_zone(zone_id=zone_id, gym_id=gym_id)
        return {"status": "Zone deleted successfully"}
    except Exception as e:
        handle_db_error(e, "Zone")
    finally:
        manager.close()

def handle_db_error(e: Exception, entity: str = "Zone"):
    error_message = str(e)
    print(f"❌ Database error on {entity.lower()}: {error_message}")

    if "duplicate key value violates unique constraint" in error_message:
        raise HTTPException(status_code=400, detail=f"❌ {entity} with given ID already exists.")

    if "violates foreign key constraint" in error_message:
        if "gym" in error_message:
            raise HTTPException(status_code=400, detail="❌ Gym ID does not exist.")
        raise HTTPException(status_code=400, detail=f"❌ Foreign key violation in {entity.lower()}")

    if "violates check constraint" in error_message:
        raise HTTPException(status_code=400, detail=f"❌ Invalid data for {entity.lower()}.")

    raise HTTPException(status_code=500, detail="❌ Internal Server Error")