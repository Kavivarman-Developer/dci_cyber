import random
from datetime import datetime
from fastapi import APIRouter
from app.models import SecurityAuditCreate, SecurityAuditResponse
from app.database import db

router = APIRouter()

@router.post("/audit", response_model=SecurityAuditResponse)
async def submit_security_audit(audit_data: SecurityAuditCreate):
    report_id = f"REP-{random.randint(10000, 99999)}"
    record = audit_data.model_dump()
    record["report_id"] = report_id
    record["created_at"] = datetime.utcnow()

    recommendations = [
        "Perform deep Penetration Testing (VAPT) on web API endpoints & microservices.",
        "Deploy 24/7 SIEM/SOAR automated threat detection & incident response.",
        "Enforce Zero-Trust Identity verification & micro-segmentation across hybrid clouds.",
        "Implement continuous Infrastructure as Code (IaC) configuration drift scanning."
    ]

    if db.is_connected:
        try:
            await db.db["audit_reports"].insert_one(record)
        except Exception:
            db.memory_store["audit_reports"].append(record)
    else:
        db.memory_store["audit_reports"].append(record)

    return SecurityAuditResponse(
        success=True,
        reportId=report_id,
        score=audit_data.calculatedScore or 85,
        riskLevel=audit_data.riskLevel or "MEDIUM",
        recommendations=recommendations,
        message="Enterprise Security Assessment Report generated successfully."
    )
