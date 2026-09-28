import React, { useState } from 'react';
import { X, FileText, Download, UserCheck, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ClientPortalModal() {
  const { activeModal, closeModal, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (activeModal !== 'portal') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-blue-600">CLIENT PORTAL PREVIEW</div>
              <h3 className="text-lg font-bold text-slate-900">DCI Security Telemetry & Ticket Dashboard</h3>
            </div>
          </div>
          
          <button
            onClick={closeModal}
            className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portal Body */}
        {isLoggedIn ? (
          <div className="space-y-6">
            
            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-mono">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-[10px] font-bold text-slate-500">SECURITY INDEX</div>
                <div className="text-2xl font-extrabold text-blue-600">98.4 / 100</div>
                <div className="text-[11px] text-emerald-700 font-bold">✓ SHIELDS OPTIMAL</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-[10px] font-bold text-slate-500">ACTIVE SOC SLA</div>
                <div className="text-2xl font-extrabold text-slate-900">&lt; 5 Mins</div>
                <div className="text-[11px] text-slate-500">24/7 Monitoring Active</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-[10px] font-bold text-slate-500">OPEN TICKETS</div>
                <div className="text-2xl font-extrabold text-slate-900">1 Low</div>
                <div className="text-[11px] text-slate-500">0 Critical Incidents</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-[10px] font-bold text-slate-500">LAST VAPT AUDIT</div>
                <div className="text-sm font-extrabold text-emerald-700 pt-1">PASSED (ISO 27001)</div>
                <div className="text-[11px] text-slate-500 font-sans">Certificate Valid</div>
              </div>
            </div>

            {/* Portal Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2 font-mono">
              {['overview', 'tickets', 'reports', 'apikeys'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content View */}
            {activeTab === 'overview' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs uppercase font-bold text-blue-600">Protected Infrastructure Nodes</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white border border-slate-200">
                      <span className="text-slate-800 font-bold">AWS-PROD-EKS-CLUSTER (us-east-1)</span>
                      <span className="text-emerald-700 font-bold">● SECURE</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white border border-slate-200">
                      <span className="text-slate-800 font-bold">REST API GATEWAY (/v1/payments)</span>
                      <span className="text-emerald-700 font-bold">● SECURE</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-white border border-slate-200">
                      <span className="text-slate-800 font-bold">MONGO-CLUSTER-PRIMARY (Replica Set 3)</span>
                      <span className="text-emerald-700 font-bold">● SECURE</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tickets' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-slate-900 font-bold">#TICK-8021: Routine Cloud Posture Scan Report</div>
                    <div className="text-slate-500 text-[11px] font-sans">Opened: 2 days ago by DCI Security Analyst</div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                    CLOSED
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-slate-900 font-bold">#TICK-8024: SSL Certificate Auto-Renewal Notice</div>
                    <div className="text-slate-500 text-[11px] font-sans">Opened: Today by DCI Bot</div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-bold text-[10px]">
                    IN PROGRESS
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-slate-900 font-bold">Annual VAPT Security Penetration Audit 2026.pdf</div>
                      <div className="text-slate-500 text-[11px] font-sans">Verified by Certified Ethical Hacker #8902</div>
                    </div>
                  </div>
                  <button
                    onClick={() => showToast('Downloading VAPT Security Report PDF...')}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 font-sans shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'apikeys' && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs">
                <div className="text-slate-700 font-bold">SOC Telemetry Ingestion Key:</div>
                <div className="p-3 rounded-lg bg-white border border-slate-300 text-blue-700 font-bold flex items-center justify-between">
                  <span>dci_live_sk_892019840192849012840918</span>
                  <button
                    onClick={() => showToast('API Telemetry Key copied to clipboard.')}
                    className="text-slate-600 hover:text-slate-900 font-bold"
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-200 font-sans">
              <span className="text-xs text-slate-500 font-mono">Logged in as: cto@enterprise.com</span>
              <button
                onClick={() => showToast('Emergency SOC Hotline Triggered. Telemetry team notified.')}
                className="px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 text-xs font-bold font-mono"
              >
                Trigger 24/7 SOC Emergency Escalation
              </button>
            </div>

          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <Lock className="w-12 h-12 text-blue-600 mx-auto" />
            <h4 className="text-lg font-bold text-slate-900">Client Portal Authentication</h4>
            <button
              onClick={() => setIsLoggedIn(true)}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm"
            >
              Sign In as Enterprise Client
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
