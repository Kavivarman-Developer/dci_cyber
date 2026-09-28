import logging
from motor.motor_asyncio import AsyncIOMotorClient
from app.config import settings

logger = logging.getLogger("dci_database")

class Database:
    client: AsyncIOMotorClient = None
    db = None
    is_connected: bool = False
    
    # In-memory storage fallback for offline MongoDB environment
    memory_store = {
        "inquiries": [],
        "audit_reports": [],
        "estimates": []
    }

db = Database()

async def connect_to_mongo():
    """Connect to MongoDB cluster/instance asynchronously."""
    try:
        db.client = AsyncIOMotorClient(
            settings.MONGODB_URL,
            serverSelectionTimeoutMS=2000
        )
        # Test connection ping
        await db.client.admin.command('ping')
        db.db = db.client[settings.DATABASE_NAME]
        db.is_connected = True
        logger.info(f"Successfully connected to MongoDB database '{settings.DATABASE_NAME}' at {settings.MONGODB_URL}")
    except Exception as e:
        db.is_connected = False
        logger.warning(f"MongoDB connection unavailable ({str(e)}). Running in high-performance memory storage mode.")

async def close_mongo_connection():
    """Close MongoDB connection gracefully."""
    if db.client:
        db.client.close()
        logger.info("MongoDB connection closed.")
