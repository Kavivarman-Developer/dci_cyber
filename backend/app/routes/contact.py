import random
from datetime import datetime
from fastapi import APIRouter, HTTPException
from app.models import ContactInquiryCreate, ContactInquiryResponse
from app.database import db

router = APIRouter()

@router.post("/contact", response_model=ContactInquiryResponse)
async def submit_contact_form(inquiry: ContactInquiryCreate):
    submission_id = f"DCI-{random.randint(100000, 999999)}"
    record = inquiry.model_dump()
    record["submission_id"] = submission_id
    record["created_at"] = datetime.utcnow()

    if db.is_connected:
        try:
            await db.db["inquiries"].insert_one(record)
        except Exception as e:
            db.memory_store["inquiries"].append(record)
    else:
        db.memory_store["inquiries"].append(record)

    return ContactInquiryResponse(
        success=True,
        message="Confidential technical inquiry received successfully. DCI Cyber team will reach out within 2 hours.",
        submission_id=submission_id
    )
