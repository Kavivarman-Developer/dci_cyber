import React, { useState } from 'react';
import { Shield, ShieldAlert, Activity, Lock, CloudLightning, Code2, Cpu, Server, Database, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { CYBER_SERVICES, TECH_SERVICES } from '../data/mockData';
import { useApp } from '../context/AppContext';

export default function ServicesShowcase() {
  const { openModal } = useApp();
  const [activeTab, setActiveTab] = useState('cybersecurity');

  const iconMap = {
    ShieldAlert: ShieldAlert,
    Activity: Activity,
    Lock: Lock,
    CloudLightning: CloudLightning,
    Code2: Code2,
    Cpu: Cpu,
    Server: Server,
    Database: Database,
  };

  const serviceColorStyles = {
    vapt: {
      border: 'border-rose-500/30 hover:border-rose-500/60',
      iconBg: 'bg-rose-500/10 text-rose-500 border-rose-500/30',
      badge: 'bg-rose-500/10 text-rose-600 border-rose-500/30',
      accent: 'text-rose-600',
    },
    'managed-soc': {
      border: 'border-cyan-500/30 hover:border-cyan-500/60',
      iconBg: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/30',
      badge: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/30',
      accent: 'text-cyan-600',
    },
    'zero-trust': {
      border: 'border-indigo-500/30 hover:border-indigo-500/60',
      iconBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/30',
      badge: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/30',
      accent: 'text-indigo-600',
    },
    'cloud-security': {
      border: 'border-sky-500/30 hover:border-sky-500/60',
      iconBg: 'bg-sky-500/10 text-sky-600 border-sky-500/30',
      badge: 'bg-sky-500/10 text-sky-600 border-sky-500/30',
      accent: 'text-sky-600',
    },
    'enterprise-software': {
      border: 'border-blue-500/30 hover:border-blue-500/60',
      iconBg: 'bg-blue-500/10 text-blue-600 border-blue-500/30',
      badge: 'bg-blue-500/10 text-blue-600 border-blue-500/30',
      accent: 'text-blue-600',
    },
    'ai-automation': {
      border: 'border-violet-500/30 hover:border-violet-500/60',
      iconBg: 'bg-violet-500/10 text-violet-600 border-violet-500/30',
      badge: 'bg-violet-500/10 text-violet-600 border-violet-500/30',
      accent: 'text-violet-600',
    },
    'cloud-devops': {
      border: 'border-emerald-500/30 hover:border-emerald-500/60',
      iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
      badge: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
      accent: 'text-emerald-600',
    },
    'data-engineering': {
      border: 'border-amber-500/30 hover:border-amber-500/60',
      iconBg: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
      badge: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
      accent: 'text-amber-600',
    },
  };

  const services = activeTab === 'cybersecurity' ? CYBER_SERVICES : TECH_SERVICES;

  return (
    <section id="services" className="py-24 bg-slate-900 text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-mono font-bold">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>CORE CAPABILITIES & ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Enterprise Solutions & Technology Engineering
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Architected for scale, resilience, and maximum performance. Explore our multi-disciplinary cybersecurity & software engineering capabilities.
          </p>

          {/* Solution Tabs */}
          <div className="flex items-center justify-center gap-3 pt-6 font-sans">
            <button
              onClick={() => setActiveTab('cybersecurity')}
              className={`px-7 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'cybersecurity'
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-[1.02]'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              Cybersecurity Solutions
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-7 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all ${
                activeTab === 'tech'
                  ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/25 scale-[1.02]'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              Enterprise Tech Solutions
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Shield;
            const style = serviceColorStyles[service.id] || serviceColorStyles['vapt'];

            return (
              <div
                key={service.id}
                className={`bg-slate-950/80 p-8 rounded-2xl border ${style.border} transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between space-y-6 group backdrop-blur-md relative overflow-hidden`}
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-xl border ${style.iconBg} transition-all group-hover:scale-110`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${style.badge} uppercase tracking-widest`}>
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className={`text-xs font-mono font-semibold ${style.accent}`}>
                    "{service.tagline}"
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Capability Bullet Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className={`w-4 h-4 ${style.accent} shrink-0`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action CTA */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => openModal('consultation', service)}
                    className={`text-xs font-extrabold ${style.accent} hover:underline uppercase tracking-wider flex items-center gap-2`}
                  >
                    <span>Request Technical Proposal</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
