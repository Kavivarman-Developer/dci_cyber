from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.database import connect_to_mongo, close_mongo_connection
from app.routes import health, contact, audit, estimate

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup actions
    await connect_to_mongo()
    yield
    # Shutdown actions
    await close_mongo_connection()

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.VERSION,
    description="Enterprise API Gateway for DCI CYBER AND TECH SOLUTIONS PRIVATE LIMITED.",
    lifespan=lifespan
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API Routers under /api prefix
app.include_router(health.router, prefix="/api", tags=["Health"])
app.include_router(contact.router, prefix="/api", tags=["Contact & Inquiries"])
app.include_router(audit.router, prefix="/api", tags=["Security Audit"])
app.include_router(estimate.router, prefix="/api", tags=["Project Estimations"])

@app.get("/")
async def root():
    return {
        "message": "Welcome to DCI CYBER AND TECH SOLUTIONS PRIVATE LIMITED API Gateway",
        "docs": "/docs",
        "health": "/api/health"
    }
