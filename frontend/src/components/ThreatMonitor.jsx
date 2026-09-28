import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Radio, Lock, ArrowUpRight, ShieldAlert, Sparkles } from 'lucide-react';
import { MOCK_THREAT_FEED } from '../data/mockData';

export default function ThreatMonitor() {
  const [threats, setThreats] = useState(MOCK_THREAT_FEED);
  const [filterSeverity, setFilterSeverity] = useState('ALL');
  const [isLive, setIsLive] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const threatTypes = [
        { type: "API Rate Limit Exceeded", severity: "LOW", target: "/v2/data/export" },
        { type: "Suspicious Privilege Escalation", severity: "CRITICAL", target: "K8s Admin ServiceAccount" },
        { type: "Cross-Site Scripting (XSS) Blocked", severity: "MEDIUM", target: "Feedback Form" },
        { type: "Zero-Day Exploit Signature Mitigated", severity: "CRITICAL", target: "Edge NGINX Gateway" },
        { type: "Brute Force Auth Attack Blocked", severity: "HIGH", target: "Admin Login Portal" }
      ];

      const randomThreat = threatTypes[Math.floor(Math.random() * threatTypes.length)];
      const newEntry = {
        id: `T-${Math.floor(9000 + Math.random() * 1000)}`,
        timestamp: "Just now",
        type: randomThreat.type,
        severity: randomThreat.severity,
        origin: `${Math.floor(Math.random() * 200 + 10)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        target: randomThreat.target,
        status: "Mitigated"
      };

      setThreats((prev) => [newEntry, ...prev.slice(0, 7)]);
      setLastUpdated(new Date().toLocaleTimeString());
    }, 4000);

    return () => clearInterval(interval);
  }, [isLive]);

  const filteredThreats = filterSeverity === 'ALL'
    ? threats
    : threats.filter(t => t.severity === filterSeverity);

  return (
    <section id="soc-monitor" className="py-24 relative bg-slate-950 bg-grid-pattern border-y border-slate-800/80 overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold mb-3 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
              <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              <span>DCI 24/7 SOC COMMAND CENTER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Live Threat Telemetry & Incident Mitigation
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Real-time attack vector telemetry stream powered by DCI's automated SIEM/SOAR threat mitigation engine.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsLive(!isLive)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                isLive
                  ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${isLive ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
              <span>{isLive ? 'LIVE FEED ACTIVE' : 'PAUSED'}</span>
            </button>

            {/* Severity Filter Buttons */}
            <div className="flex items-center gap-1 bg-slate-900 p-1.5 rounded-xl border border-slate-800 font-mono">
              {['ALL', 'CRITICAL', 'HIGH', 'MEDIUM'].map((sev) => (
                <button
                  key={sev}
                  onClick={() => setFilterSeverity(sev)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-extrabold transition-all ${
                    filterSeverity === sev
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {sev}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Telemetry Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Table / Stream Feed */}
          <div className="lg:col-span-8 bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-xl">
            <div className="px-5 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
              <span className="flex items-center gap-2 font-bold text-cyan-400">
                <Activity className="w-4 h-4 text-cyan-400" />
                TELEMETRY EVENT STREAM
              </span>
              <span className="text-[11px] text-slate-500">Updated: {lastUpdated}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase text-[10px] tracking-wider font-bold">
                  <tr>
                    <th className="px-4 py-3">Event ID</th>
                    <th className="px-4 py-3">Attack Type</th>
                    <th className="px-4 py-3">Severity</th>
                    <th className="px-4 py-3">Source IP</th>
                    <th className="px-4 py-3">Target Asset</th>
                    <th className="px-4 py-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300">
                  {filteredThreats.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/60 transition-colors">
                      <td className="px-4 py-3 text-cyan-400 font-bold">{item.id}</td>
                      <td className="px-4 py-3 text-white font-semibold">{item.type}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                            item.severity === 'CRITICAL'
                              ? 'bg-rose-950 text-rose-400 border border-rose-800 shadow-[0_0_10px_rgba(244,63,94,0.3)]'
                              : item.severity === 'HIGH'
                              ? 'bg-amber-950 text-amber-400 border border-amber-800'
                              : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {item.severity}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-400">{item.origin}</td>
                      <td className="px-4 py-3 text-slate-400">{item.target}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right SOC Command Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-5 shadow-2xl">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                SOC Operational Posture
              </h3>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">SIEM Pipeline Engine</span>
                  <span className="text-emerald-400 font-extrabold">100% OPERATIONAL</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">SOAR Auto Containment</span>
                  <span className="text-cyan-400 font-extrabold">ENABLED (0.4s)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Threat Intel Sync</span>
                  <span className="text-purple-400 font-extrabold">GLOBAL SYNC</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/50 border border-cyan-800/80 space-y-2 font-sans">
                <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  Need SOC Defense for your Enterprise?
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Protect your cloud infrastructure and internal networks with DCI's 24/7 Managed SOC operations.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-1"
                >
                  Schedule SOC Consultation <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
