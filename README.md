# DCI CYBER AND TECH SOLUTIONS PRIVATE LIMITED

Enterprise Full-Stack Security & Technology Engineering Platform built with **React (Vite + Tailwind CSS)**, **Python (FastAPI)**, and **MongoDB**.

---

## Architecture Overview

```
DCI_Cyber Tech/
├── frontend/                 # Vite + React 18 + Tailwind CSS + Lucide Icons
│   ├── src/
│   │   ├── components/       # Header, Hero, ThreatMonitor, SecurityAuditTool, ServicesShowcase, CostEstimator, CaseStudies, ContactSection, ClientPortalModal, ToastNotification, Footer
│   │   ├── context/          # AppContext (Global state, modals, alerts, status)
│   │   ├── data/             # Enterprise mock data & threat feeds
│   │   ├── services/         # API integration client (api.js)
│   │   ├── App.jsx           # Main App assembly
│   │   └── index.css         # Tailwind & cyber styling utilities
│   ├── package.json
│   └── vite.config.js
└── backend/                  # Python 3.14 + FastAPI + Pydantic + Motor (MongoDB)
    ├── app/
    │   ├── main.py           # FastAPI application gateway & CORS
    │   ├── config.py         # Application settings
    │   ├── database.py       # Async Motor MongoDB connection with fallback storage
    │   ├── models.py         # Pydantic data schemas & validators
    │   └── routes/           # API Endpoints (/api/health, /api/contact, /api/audit, /api/estimate)
    ├── test_backend.py       # Automated backend route test suite
    ├── requirements.txt
    └── .env.example
```

---

## Key Features & Components

1. **Header & Navigation (`Navbar.jsx`)**:
   - Company branding with glowing cyber badge
   - Live 24/7 SOC status beacon
   - Smooth navigation triggers for all sections
   - Free Security Audit Wizard CTA & Client Portal access modal

2. **Futuristic Hero Section (`Hero.jsx`)**:
   - Cyber grid background with radial glow
   - Live telemetry console preview displaying real-time SOC metrics
   - Key metrics highlights (14.8M+ threats blocked, <8 min containment SLA, 99.99% uptime, 350+ clients)

3. **Live Threat Telemetry Monitor (`ThreatMonitor.jsx`)**:
   - Simulated real-time attack vector feed (SQLi, DDoS, Credential Stuffing, Cloud IAM privilege escalation)
   - Severity filters (ALL, CRITICAL, HIGH, MEDIUM)
   - Real-time status toggle (LIVE / PAUSED)

4. **Enterprise Security Health Audit Tool (`SecurityAuditTool.jsx`)**:
   - 3-step interactive assessment wizard (Workloads, Compliance targets, Organization scale)
   - Automated score calculation (0-100) & risk level assignment (CRITICAL, MEDIUM, LOW)
   - Tailored DCI remediation plan output & PDF report download trigger
   - Integrated with Python backend `/api/audit` endpoint

5. **Solutions & Capabilities Grid (`ServicesShowcase.jsx`)**:
   - Tabbed navigation: **Cybersecurity Solutions** (VAPT, 24/7 Managed SOC, Zero-Trust, Cloud Security) & **Enterprise Tech Solutions** (Enterprise Web/Mobile, GenAI/RAG, DevOps/Kubernetes, Data Engineering)
   - Direct proposal request modal trigger

6. **Interactive Project Cost Estimator (`CostEstimator.jsx`)**:
   - Scale tier selector (Startup, Growth, Enterprise)
   - Add-on service modules toggles
   - Real-time budget calculation in USD ($) and INR (₹)
   - Integrated with Python backend `/api/estimate` endpoint

7. **Case Studies & Regulatory Standards (`CaseStudies.jsx`)**:
   - Real-world enterprise case studies (FinTech Bank, Healthcare Alliance, E-Commerce Botnet Mitigation)
   - Global compliance badges (ISO 27001:2022, SOC 2 Type II, PCI-DSS 4.0, CERT-In, HIPAA)

8. **Enterprise Client Portal Modal (`ClientPortalModal.jsx`)**:
   - Client portal preview showing security index score, protected infrastructure nodes, incident tickets, VAPT reports, and emergency SOC escalation hotline

9. **Confidential Contact & Consultation Form (`ContactSection.jsx`)**:
   - Validated technical request form
   - Integrated with Python backend `/api/contact` endpoint

---

## How to Run the Application

### 1. Running the React Frontend
```bash
cd frontend
npm install
npm run dev
```
The frontend will start at `http://localhost:5173`.

To verify production build:
```bash
npm run build
```

### 2. Running the Python FastAPI Backend
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```
The API documentation will be available at `http://localhost:8000/docs`.

### 3. Running Backend Tests
```bash
cd backend
python test_backend.py
```

---

## Database Configuration (MongoDB)
By default, the backend connects to MongoDB at `mongodb://localhost:27017/dci_cybertech_db`. If MongoDB is not running locally, the application automatically uses high-performance memory storage mode for seamless evaluation.
