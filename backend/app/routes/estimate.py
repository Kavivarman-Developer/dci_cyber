import random
from datetime import datetime
from fastapi import APIRouter
from app.models import QuoteEstimationCreate, QuoteEstimationResponse
from app.database import db

router = APIRouter()

@router.post("/estimate", response_model=QuoteEstimationResponse)
async def submit_quote_estimate(quote: QuoteEstimationCreate):
    quote_id = f"Q-DCI-{random.randint(1000, 9999)}"
    record = quote.model_dump()
    record["quote_id"] = quote_id
    record["created_at"] = datetime.utcnow()

    if db.is_connected:
        try:
            await db.db["estimates"].insert_one(record)
        except Exception:
            db.memory_store["estimates"].append(record)
    else:
        db.memory_store["estimates"].append(record)

    return QuoteEstimationResponse(
        success=True,
        quoteId=quote_id,
        message=f"Project estimate reference {quote_id} saved successfully."
    )
