import asyncio
from app.models import ContactInquiryCreate, SecurityAuditCreate, QuoteEstimationCreate
from app.routes import health, contact, audit, estimate

async def run_tests():
    print("--- 1. Testing Health Endpoint ---")
    health_res = await health.get_health_status()
    print("Health Status Output:", health_res)
    assert health_res["status"] == "healthy"

    print("\n--- 2. Testing Contact Form Submission ---")
    contact_input = ContactInquiryCreate(
        name="Alexander Vance",
        email="alexander@cybertech-enterprise.com",
        phone="+91 (0) 80-4920-8800",
        company="CyberTech Global",
        serviceInterest="24/7 Managed SOC",
        message="Evaluating enterprise SOC telemetry monitoring SLA."
    )
    contact_res = await contact.submit_contact_form(contact_input)
    print("Contact Submission Output:", contact_res.model_dump())
    assert contact_res.success is True

    print("\n--- 3. Testing Security Audit Generator ---")
    audit_input = SecurityAuditCreate(
        companyName="FinTech Payment Systems Ltd",
        workloads=["cloud", "web", "database"],
        companySize="250-1000",
        compliance=["iso27001", "pci", "soc2"],
        email="ciso@fintechpay.com",
        calculatedScore=92,
        riskLevel="LOW"
    )
    audit_res = await audit.submit_security_audit(audit_input)
    print("Audit Response Output:", audit_res.model_dump())
    assert audit_res.success is True

    print("\n--- 4. Testing Quote Estimation Endpoint ---")
    estimate_input = QuoteEstimationCreate(
        tier="growth",
        currency="USD",
        addons={"vapt": True, "soc": True, "ai": True},
        calculatedEstimate=13500.0
    )
    estimate_res = await estimate.submit_quote_estimate(estimate_input)
    print("Estimate Response Output:", estimate_res.model_dump())
    assert estimate_res.success is True

    print("\n==================================================")
    print("[OK] ALL FASTAPI BACKEND ROUTE HANDLERS VERIFIED SUCCESSFULLY!")
    print("==================================================")

if __name__ == "__main__":
    asyncio.run(run_tests())
