from fastapi import APIRouter, HTTPException
from gym_backend.database.models.gym import GymManager

router = APIRouter()

@router.get("/", summary="Get all gyms")
def get_gyms():
    manager = GymManager()
    try:
        gyms = manager.read_gyms()
        if gyms is None:
            raise HTTPException(status_code=404, detail="No gyms found")
        return gyms
    finally:
        manager.close()
