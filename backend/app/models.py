from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional
from datetime import datetime

class ContactInquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    serviceInterest: str = "General Security Audit"
    message: Optional[str] = None

class ContactInquiryResponse(BaseModel):
    success: bool
    message: str
    submission_id: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class SecurityAuditCreate(BaseModel):
    companyName: str
    workloads: List[str] = []
    companySize: str = "50-250"
    compliance: List[str] = []
    email: EmailStr
    calculatedScore: Optional[int] = 85
    riskLevel: Optional[str] = "MEDIUM"

class SecurityAuditResponse(BaseModel):
    success: bool
    reportId: str
    score: int
    riskLevel: str
    recommendations: List[str]
    message: str

class QuoteEstimationCreate(BaseModel):
    tier: str
    currency: str = "USD"
    addons: dict = {}
    calculatedEstimate: float

class QuoteEstimationResponse(BaseModel):
    success: bool
    quoteId: str
    message: str
