import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, ChevronRight, RefreshCcw, Download, Sparkles, Award } from 'lucide-react';
import { submitSecurityAudit } from '../services/api';
import { useApp } from '../context/AppContext';

export default function SecurityAuditTool() {
  const { showToast } = useApp();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [reportResult, setReportResult] = useState(null);

  const [formData, setFormData] = useState({
    companyName: '',
    workloads: [],
    companySize: '50-250',
    compliance: [],
    email: '',
  });

  const workloadsList = [
    { id: 'cloud', label: 'Cloud Infrastructure (AWS / Azure / GCP)' },
    { id: 'web', label: 'Web Applications & REST APIs' },
    { id: 'mobile', label: 'Mobile Apps (iOS / Android)' },
    { id: 'onprem', label: 'On-Premise Servers & Internal Networks' },
    { id: 'database', label: 'Databases & Sensitive Data Stores' },
  ];

  const complianceList = [
    { id: 'iso27001', label: 'ISO 27001:2022' },
    { id: 'soc2', label: 'SOC 2 Type II' },
    { id: 'pci', label: 'PCI-DSS 4.0' },
    { id: 'hipaa', label: 'HIPAA' },
    { id: 'gdpr', label: 'GDPR / DPDP India' },
  ];

  const toggleWorkload = (id) => {
    setFormData((prev) => ({
      ...prev,
      workloads: prev.workloads.includes(id)
        ? prev.workloads.filter((w) => w !== id)
        : [...prev.workloads, id],
    }));
  };

  const toggleCompliance = (id) => {
    setFormData((prev) => ({
      ...prev,
      compliance: prev.compliance.includes(id)
        ? prev.compliance.filter((c) => c !== id)
        : [...prev.compliance, id],
    }));
  };

  const handleGenerateReport = async (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email) {
      showToast('Please fill in your company name and work email.', 'error');
      return;
    }

    setLoading(true);

    const baseScore = 95;
    const penaltyWorkloads = formData.workloads.length * 4;
    const bonusCompliance = formData.compliance.length * 2;
    const calculatedScore = Math.max(52, Math.min(96, baseScore - penaltyWorkloads + bonusCompliance));
    
    let riskLevel = 'LOW';
    if (calculatedScore < 70) riskLevel = 'CRITICAL';
    else if (calculatedScore < 85) riskLevel = 'MEDIUM';

    const payload = {
      ...formData,
      calculatedScore,
      riskLevel,
      timestamp: new Date().toISOString(),
    };

    const response = await submitSecurityAudit(payload);
    setLoading(false);

    if (response.success) {
      setReportResult({
        ...payload,
        reportId: response.reportId || `REP-${Math.floor(10000 + Math.random() * 90000)}`,
        recommendations: [
          'Perform deep Penetration Testing (VAPT) on web & cloud API endpoints.',
          'Deploy 24/7 SIEM/SOAR automated threat telemetry detection.',
          'Enforce Zero-Trust Identity verification across internal networks.',
          'Establish automated IaC configuration drift monitoring.'
        ]
      });
      setStep(4);
      showToast('Security Audit Report generated successfully!');
    }
  };

  const resetForm = () => {
    setStep(1);
    setReportResult(null);
    setFormData({
      companyName: '',
      workloads: [],
      companySize: '50-250',
      compliance: [],
      email: '',
    });
  };

  return (
    <section id="audit-tool" className="py-24 bg-slate-900 relative border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold shadow-lg">
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
            <span>ENTERPRISE CYBER HEALTH AUDITOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your Organization's Cyber Risk Score
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Interactive self-assessment tool evaluating architecture risk, attack vectors, and regulatory compliance posture.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-slate-950/90 p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl relative backdrop-blur-xl">
          
          {/* Step Progress Bar */}
          {step < 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-2">
                <span>STEP {step} OF 3</span>
                <span className="text-cyan-400">{step === 1 ? 'Workloads' : step === 2 ? 'Compliance' : 'Company Info'}</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: WORKLOAD SELECTION */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-lg font-bold text-white">
                Select Your Active Digital Infrastructure & Assets
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {workloadsList.map((item) => {
                  const selected = formData.workloads.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleWorkload(item.id)}
                      className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                        selected
                          ? 'bg-cyan-950/70 border-cyan-400 text-white shadow-[0_0_20px_rgba(0,242,254,0.25)]'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{item.label}</span>
                      <CheckCircle2 className={`w-5 h-5 ${selected ? 'text-cyan-400' : 'text-slate-700'}`} />
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg"
                >
                  <span>Next: Compliance Targets</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: COMPLIANCE TARGETS & TEAM SIZE */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-lg font-bold text-white">
                Select Target Regulatory Compliance Standards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {complianceList.map((item) => {
                  const selected = formData.compliance.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleCompliance(item.id)}
                      className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                        selected
                          ? 'bg-purple-950/70 border-purple-500 text-white shadow-[0_0_20px_rgba(121,40,202,0.25)]'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{item.label}</span>
                      <CheckCircle2 className={`w-5 h-5 ${selected ? 'text-purple-400' : 'text-slate-700'}`} />
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase">Organization Scale</label>
                <select
                  value={formData.companySize}
                  onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-purple-400 outline-none font-semibold"
                >
                  <option value="1-50">1 - 50 Employees (Startup Scale)</option>
                  <option value="50-250">50 - 250 Employees (Mid-Market)</option>
                  <option value="250-1000">250 - 1,000 Employees (Growth Enterprise)</option>
                  <option value="1000+">1,000+ Employees (Global Enterprise)</option>
                </select>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-semibold text-sm"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg"
                >
                  <span>Next: Generate Assessment</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: COMPANY DETAILS & SUBMIT */}
          {step === 3 && (
            <form onSubmit={handleGenerateReport} className="space-y-5 animate-in fade-in duration-300">
              <h3 className="text-lg font-bold text-white">
                Final Step: Enter Enterprise Credentials
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase block mb-1">Company / Entity Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Global Technologies Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-400 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase block mb-1">Work Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="cto@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-semibold text-sm"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <RefreshCcw className="w-4 h-4 animate-spin" />
                      Analyzing Telemetry...
                    </span>
                  ) : (
                    <span>Generate Instant Audit Report</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: AUDIT REPORT RESULTS */}
          {step === 4 && reportResult && (
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
                
                {/* Header Badge */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400">REPORT ID: {reportResult.reportId}</span>
                    <h3 className="text-xl font-bold text-white">{reportResult.companyName} - Security Health Score</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-center px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-2xl font-extrabold text-cyan-400 font-mono">{reportResult.calculatedScore}/100</div>
                      <div className="text-[10px] text-slate-400 font-mono font-bold">SECURITY INDEX</div>
                    </div>
                    <div className="text-center px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className={`text-sm font-extrabold font-mono ${
                        reportResult.riskLevel === 'CRITICAL' ? 'text-rose-400' : 'text-amber-400'
                      }`}>
                        {reportResult.riskLevel}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono font-bold">RISK LEVEL</div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                    Recommended DCI Remediation Actions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {reportResult.recommendations.map((rec, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 flex items-center justify-center gap-2"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                  Run New Audit
                </button>
                
                <button
                  onClick={() => showToast('Full PDF Report download link sent to your registered email.')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  Download Full PDF Audit Report
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
