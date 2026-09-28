export const COMPANY_DETAILS = {
  name: "DCI CYBER AND TECH SOLUTIONS PRIVATE LIMITED",
  shortName: "DCI Cyber & Tech",
  tagline: "Next-Generation Enterprise Cybersecurity & Digital Engineering",
  description: "DCI Cyber & Tech Solutions Private Limited is a premier enterprise cybersecurity and technology transformation firm. We empower global enterprises, financial institutions, and government agencies with impenetrable cyber defense, 24/7 SOC operations, and resilient cloud engineering.",
  cin: "U72900IN2024PTC123456",
  email: "contact@dcicybertech.com",
  supportEmail: "soc@dcicybertech.com",
  phone: "+91 (0) 80-4920-8800",
  address: "DCI Cyber Tower, Tech Corridor Phase II, Bangalore, Karnataka - 560103, India",
  globalLocations: ["Bangalore (HQ)", "Singapore", "Dubai", "San Francisco"],
  stats: {
    threatsPrevented: "14.8M+",
    uptimeSLA: "99.99%",
    enterpriseClients: "350+",
    socResponseTime: "< 8 Mins",
  }
};

export const CYBER_SERVICES = [
  {
    id: "vapt",
    category: "cybersecurity",
    title: "Vulnerability Assessment & Pen Testing (VAPT)",
    icon: "ShieldAlert",
    tagline: "Expose critical vulnerabilities before threat actors exploit them.",
    description: "Deep offensive security testing covering web applications, APIs, cloud environments, and internal networks using automated AI tooling and manual exploit validation by certified ethical hackers.",
    features: [
      "OWASP Top 10 & SANS 25 Deep Audit",
      "API & Microservice Penetration Testing",
      "Red Team Adversary Emulation",
      "Zero-Day Exploit POC & Remediation Guidance"
    ],
    badge: "Offensive Security"
  },
  {
    id: "managed-soc",
    category: "cybersecurity",
    title: "24/7 Managed SOC & Incident Response",
    icon: "Activity",
    tagline: "Round-the-clock threat detection, SIEM telemetry, and rapid mitigation.",
    description: "Continuous monitoring powered by AI-assisted SIEM/SOAR technologies. Our security analysts actively hunt threats, analyze telemetry, and execute instant containment playbooks.",
    features: [
      "Real-time XDR & SIEM Threat Monitoring",
      "Automated Incident Containment Playbooks",
      "Threat Intelligence & Dark Web Monitoring",
      "Under 10-Minute Response SLA"
    ],
    badge: "24/7 Operations"
  },
  {
    id: "zero-trust",
    category: "cybersecurity",
    title: "Zero-Trust Architecture & IAM",
    icon: "Lock",
    tagline: "Never trust, always verify across users, devices, and workloads.",
    description: "Architect and deploy modern Zero-Trust frameworks enforcing strict identity verification, micro-segmentation, dynamic access controls, and multi-factor authentication across hybrid infrastructures.",
    features: [
      "Identity & Access Management (IAM / PAM)",
      "Micro-segmentation & SASE Integration",
      "Conditional Access Policies",
      "Continuous Trust Assessment"
    ],
    badge: "Enterprise Security"
  },
  {
    id: "cloud-security",
    category: "cybersecurity",
    title: "Multi-Cloud Security & CSPM",
    icon: "CloudLightning",
    tagline: "Harden AWS, Azure, and GCP workloads against misconfiguration and data breach.",
    description: "Comprehensive Cloud Security Posture Management (CSPM) and Kubernetes runtime protection ensuring compliance, continuous posture drift detection, and secure IaC deployment pipelines.",
    features: [
      "AWS / Azure / GCP Compliance Drift Detection",
      "Container & Kubernetes Runtime Security",
      "IaC Code Security Scanning (Terraform/Pulumi)",
      "Cloud Data Loss Prevention (DLP)"
    ],
    badge: "Cloud Defense"
  }
];

export const TECH_SERVICES = [
  {
    id: "enterprise-software",
    category: "tech",
    title: "Enterprise Web & Mobile Engineering",
    icon: "Code2",
    tagline: "Scalable, high-performance web & cross-platform mobile architectures.",
    description: "Custom software development utilizing React, Next.js, Python FastAPI, Node.js, and cloud-native microservices designed for massive traffic throughput and zero downtime.",
    features: [
      "Modern React / Next.js Full-Stack Architecture",
      "High-Performance REST & GraphQL APIs",
      "Micro-Frontend Design Systems",
      "Progressive Web Apps & Cross-Platform Mobile"
    ],
    badge: "Engineering"
  },
  {
    id: "ai-automation",
    category: "tech",
    title: "AI, GenAI & Workflow Automation",
    icon: "Cpu",
    tagline: "Harness LLMs, intelligent agents, and RPA to eliminate operational friction.",
    description: "Build custom enterprise AI agents, retrieval-augmented generation (RAG) platforms, document intelligence pipelines, and automated customer workflow engines.",
    features: [
      "Custom Enterprise RAG & LLM Integration",
      "Predictive Analytics & Anomaly Detection",
      "Process Automation (RPA)",
      "Secure On-Premise AI Deployments"
    ],
    badge: "Artificial Intelligence"
  },
  {
    id: "cloud-devops",
    category: "tech",
    title: "DevOps & Cloud Native Architecture",
    icon: "Server",
    tagline: "Accelerate delivery pipelines with automated CI/CD and Kubernetes orchestration.",
    description: "Streamline engineering workflows with GitOps, containerization, Infrastructure as Code, dynamic autoscaling, and zero-downtime deployment pipelines.",
    features: [
      "Kubernetes (EKS/AKS) Cluster Management",
      "Automated CI/CD Pipelines (GitHub Actions/GitLab)",
      "Infrastructure as Code (Terraform/CloudFormation)",
      "Observability & APM (Prometheus/Grafana/Datadog)"
    ],
    badge: "Infrastructure"
  },
  {
    id: "data-engineering",
    category: "tech",
    title: "Data Engineering & Analytics Platforms",
    icon: "Database",
    tagline: "Transform unstructured raw data into real-time business intelligence.",
    description: "Architect scalable data pipelines, data warehouses, and streaming telemetry layers capable of processing terabytes of enterprise transactions with ultra-low latency.",
    features: [
      "Real-time ETL / ELT Data Pipelines",
      "Snowflake & MongoDB Big Data Architecture",
      "Data Governance & Compliance Masking",
      "Executive Analytics Dashboards"
    ],
    badge: "Data Systems"
  }
];

export const MOCK_THREAT_FEED = [
  { id: "T-9021", timestamp: "Just now", type: "SQL Injection Blocked", severity: "CRITICAL", origin: "185.220.101.4", target: "API /v1/auth/login", status: "Mitigated" },
  { id: "T-9022", timestamp: "1 min ago", type: "DDoS Traffic Spike (12.4 Gbps)", severity: "HIGH", origin: "Botnet Cluster US-EAST", target: "Edge Load Balancer", status: "Diverted" },
  { id: "T-9023", timestamp: "3 mins ago", type: "Credential Stuffing Attempt", severity: "MEDIUM", origin: "45.154.255.89", target: "Customer Portal", status: "Blocked" },
  { id: "T-9024", timestamp: "5 mins ago", type: "Unauthorized Cloud IAM Role Modification", severity: "HIGH", origin: "AWS-West Region", target: "S3 Bucket Policy", status: "Reverted" },
  { id: "T-9025", timestamp: "7 mins ago", type: "Malware Signature Detected", severity: "LOW", origin: "Endpoint-UK-90", target: "Workstation Agent", status: "Quarantined" }
];

export const CASE_STUDIES = [
  {
    id: "fintech-security",
    client: "Global FinTech Payment Gateway",
    sector: "Financial Services",
    challenge: "Handling 4M+ daily transactions while requiring PCI-DSS 4.0 compliance and under 15ms sub-second response times under constant adversary attacks.",
    solution: "Deployed DCI's Zero-Trust API Security gateway and 24/7 Managed SOC telemetry engine with automated microservice containment.",
    results: [
      "100% PCI-DSS 4.0 Compliance Achieved",
      "99.999% Uptime during Peak Cyber Attack",
      "0 Data Breaches over 24 Months"
    ]
  },
  {
    id: "healthcare-cloud",
    client: "Apex Health Alliance",
    sector: "Healthcare & MedTech",
    challenge: "Migrating legacy patient records across 40 hospitals into AWS while adhering to strict HIPAA & ISO 27001 data encryption standards.",
    solution: "Designed automated Infrastructure as Code with client-side KMS encryption and continuous Cloud Security Posture Management (CSPM).",
    results: [
      "3.2 Million Medical Records Secured",
      "45% Reduction in Cloud Infrastructure Costs",
      "Seamless HIPAA & SOC 2 Certification"
    ]
  },
  {
    id: "retail-ai",
    client: "OmniCart Global",
    sector: "E-Commerce Enterprise",
    challenge: "Losses exceeding $2.4M annually due to botnet inventory hoarding and automated fraudulent checkout scripts during flash sales.",
    solution: "Engineered AI Bot Mitigation system with behavioral biometric scoring integrated directly into React frontend & Python backend.",
    results: [
      "99.4% Botnet Traffic Filtered in Real-Time",
      "$3.1M Fraudulent Transactions Saved",
      "Improved Checkout Conversion by 18%"
    ]
  }
];

export const COMPLIANCE_STANDARDS = [
  { name: "ISO 27001:2022", detail: "Information Security Management System Certified", icon: "CheckCircle2" },
  { name: "SOC 2 Type II", detail: "Verified Security, Availability & Confidentiality Controls", icon: "ShieldCheck" },
  { name: "PCI-DSS 4.0", detail: "Highest Level Payment Card Industry Security Standard", icon: "CreditCard" },
  { name: "CERT-In Empaneled", detail: "Authorized Auditor for Critical National Infrastructure", icon: "Award" },
  { name: "HIPAA Compliant", detail: "Health Insurance Portability & Accountability Safeguards", icon: "FileText" }
];
