import React from 'react';
import { Award, CheckCircle2, Building2, TrendingUp, ShieldCheck } from 'lucide-react';
import { CASE_STUDIES, COMPLIANCE_STANDARDS } from '../data/mockData';

export default function CaseStudies() {
  const sectorStyles = {
    "Financial Services": "bg-cyan-950/80 text-cyan-400 border-cyan-800",
    "Healthcare & MedTech": "bg-emerald-950/80 text-emerald-400 border-emerald-800",
    "E-Commerce Enterprise": "bg-rose-950/80 text-rose-400 border-rose-800",
  };

  return (
    <section id="case-studies" className="py-24 bg-slate-900 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-mono font-bold shadow-lg">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span>ENTERPRISE PROVEN RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Case Studies & Compliance Benchmarks
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Discover how DCI Cyber & Tech Solutions safeguards mission-critical systems and accelerates digital transformation for global industry leaders.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-slate-950/80 p-7 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between space-y-6 backdrop-blur-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${sectorStyles[study.sector] || 'bg-slate-800 text-slate-300'}`}>
                    {study.sector}
                  </span>
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                
                <h3 className="text-lg font-bold text-white leading-snug">
                  {study.client}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong className="text-slate-200">Challenge:</strong> {study.challenge}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-cyan-400">Solution:</strong> {study.solution}
                </p>
              </div>

              {/* Key Results */}
              <div className="pt-4 border-t border-slate-800 space-y-2 font-medium">
                <div className="text-[10px] font-mono uppercase font-bold text-slate-400">Measured Impact:</div>
                {study.results.map((res, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Badges Banner */}
        <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-8 shadow-2xl">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              Global Regulatory & Security Certifications
            </h3>
            <p className="text-xs text-slate-400">
              Audit-ready security engineering aligned with global data protection frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {COMPLIANCE_STANDARDS.map((std, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2 shadow-lg hover:border-cyan-500/50 transition-colors"
              >
                <div className="text-sm font-extrabold text-cyan-400 font-mono">
                  {std.name}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight font-medium">
                  {std.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
