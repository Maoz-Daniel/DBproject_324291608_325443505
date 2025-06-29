from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from gym_backend.api import gym_routes
from gym_backend.api import members_routes, entry_exit_routes, zones_routes, reports_routes

app = FastAPI(
    title="Gym Backend API",
    description="API for managing gym members, entries, exits, zones and reports",
    version="1.0.0"
)

# ✅ הגדרת CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # אם תרצה, אפשר ["*"] לבדיקה
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ בדיקת תקינות API
@app.get("/")
def read_root():
    return {"status": "Gym Backend API is running"}

# ✅ הרשמת הנתיבים
app.include_router(members_routes.router, prefix="/members", tags=["Members"])
app.include_router(entry_exit_routes.router, prefix="/entry-exit", tags=["Entry & Exit"])
app.include_router(zones_routes.router, prefix="/zones", tags=["Zones"])
app.include_router(reports_routes.router, prefix="/reports", tags=["Reports"])
app.include_router(gym_routes.router, prefix="/gyms", tags=["Gyms"])

