from fastapi import APIRouter
from app.database import db
from app.config import settings

router = APIRouter()

@router.get("/health")
async def get_health_status():
    return {
        "status": "healthy",
        "app": settings.APP_NAME,
        "version": settings.VERSION,
        "mongodb": "connected" if db.is_connected else "memory_storage",
        "soc_engine": "operational 24/7"
    }
