from fastapi import APIRouter, HTTPException
from typing import Optional
from pydantic import BaseModel
from gym_backend.database.sql_runner.functions_runner import run_get_long_visits_cursor, run_get_employees_salary_summary
from gym_backend.database.sql_runner.procedures_runner import run_deactivate_old_members, run_update_jobs_cost_by_type
from gym_backend.database.sql_runner.queries_runner import (
    run_gym_entry_zone_summary,
    run_active_members_no_entry_since,
    run_monthly_entry_summary,
    run_avg_stay_per_zone_in_gym_184,
    run_gyms_with_more_than_5_repairs,
    run_gyms_with_inaccessible_zones_and_entries,
    run_entry_exit_in_busy_zones,
    run_devices_with_below_avg_exits
)

router = APIRouter()


# ===========================================
# ✅ פונקציות (Functions)
# ===========================================

# ✔️ זיהוי ביקורים ארוכים מדי
@router.get("/long-visits", summary="Get long visits")
def get_long_visits(duration: str = "3 hours"):
    try:
        result = run_get_long_visits_cursor(duration)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ✔️ סיכום שכר עובדים
@router.get("/salary-summary", summary="Get employees salary summary")
def get_salary_summary():
    try:
        result = run_get_employees_salary_summary()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ===========================================
# ✅ פרוצדורות (Procedures)
# ===========================================

# ✔️ ביטול חברים לא פעילים
class DeactivationRequest(BaseModel):
    months: int

@router.post("/deactivate-old-members", summary="Deactivate old members")
def deactivate_old_members(request: DeactivationRequest):
    try:
        run_deactivate_old_members(request.months)
        return {"status": f"Deactivated members inactive over {request.months} months"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


class JobCostUpdateInput(BaseModel):
    serviceType: str
    baseCost: float

@router.post("/update-job-cost", summary="Update job cost by service type")
def update_job_cost(data: JobCostUpdateInput):
    try:
        run_update_jobs_cost_by_type(data.serviceType, data.baseCost)
        return {"status": "Job costs updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ===========================================
# (Queries / Reports)
# ===========================================

@router.get("/gym-entry-summary", summary="Gym entry zone summary")
def gym_entry_summary():
    try:
        result = run_gym_entry_zone_summary()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/inactive-members", summary="Active members with no entry")
def inactive_members():
    try:
        result = run_active_members_no_entry_since()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/monthly-entry-summary", summary="Monthly entry summary")
def monthly_entry_summary():
    try:
        result = run_monthly_entry_summary()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/avg-stay-gym184", summary="Average stay per zone in gym 184")
def avg_stay_gym_184():
    try:
        result = run_avg_stay_per_zone_in_gym_184()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/gyms-over-5-repairs", summary="Gyms with more than 5 repairs")
def gyms_with_many_repairs():
    try:
        result = run_gyms_with_more_than_5_repairs()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/inaccessible-zones", summary="Gyms with inaccessible zones and entries")
def gyms_with_inaccessible_zones():
    try:
        result = run_gyms_with_inaccessible_zones_and_entries()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/entry-exit-busy-zones", summary="Entry/Exit in busy zones")
def entry_exit_in_busy_zones():
    try:
        result = run_entry_exit_in_busy_zones()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/devices-below-avg-exits", summary="Devices with below average exits")
def devices_below_avg_exits():
    try:
        result = run_devices_with_below_avg_exits()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
