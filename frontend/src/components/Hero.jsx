import React from 'react';
import { Shield, Lock, Activity, ChevronRight, Zap, ArrowRight, CheckCircle2, Cpu, Globe, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COMPANY_DETAILS } from '../data/mockData';

export default function Hero() {
  const { openModal } = useApp();

  return (
    <section className="relative pt-36 pb-24 flex items-center justify-center overflow-hidden min-h-[92vh]">
      
      {/* Background Image Layer with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/hero_network_bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/95 z-0" />

      {/* Decorative Vibrant Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Main Text */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Enterprise Multi-Color Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs font-mono font-semibold shadow-[0_0_20px_rgba(8,145,178,0.25)] backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 font-bold">
                DCI CYBER AND TECH SOLUTIONS PVT LTD
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-sans">ISO 27001 & SOC 2 CERTIFIED</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">Cyber Security</span> & Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-400">Tech Engineering</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Safeguard mission-critical enterprise systems and accelerate digital transformation with 24/7 Managed SOC threat telemetry, offensive VAPT testing, Zero-Trust cloud security, and custom GenAI engineering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              
              <button
                onClick={() => openModal('audit')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(79,70,229,0.4)] transition-all hover:scale-[1.03]"
              >
                <Shield className="w-5 h-5 text-cyan-300" />
                <span>Launch Free Security Audit</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="#estimator"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500 text-slate-200 font-bold text-sm flex items-center justify-center gap-2.5 transition-all backdrop-blur-md shadow-lg"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Calculate Project Cost</span>
              </a>

            </div>

            {/* Multi-Colored Metrics Grid */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg">
                <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">14.8M+</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Threats Blocked</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-500/30 backdrop-blur-md shadow-lg">
                <div className="text-xl sm:text-2xl font-extrabold text-blue-400 font-mono">&lt; 8 Mins</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">SOC Containment</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-purple-500/30 backdrop-blur-md shadow-lg">
                <div className="text-xl sm:text-2xl font-extrabold text-purple-400 font-mono">99.99%</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Uptime SLA</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md shadow-lg">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">350+</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Enterprise Clients</div>
              </div>
            </div>

          </div>

          {/* Right Vibrant Command Telemetry Preview Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Multi-color glowing outline frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-md opacity-40 animate-pulse"></div>

            <div className="relative rounded-2xl bg-slate-950/95 border border-slate-800 p-6 shadow-2xl space-y-4 font-mono text-xs backdrop-blur-xl">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-slate-400 text-[11px] ml-2 font-bold">dci-soc-engine ~ telemetry</span>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  ACTIVE SOC 24/7
                </span>
              </div>

              {/* Console Telemetry Lines */}
              <div className="space-y-2 text-slate-300 text-[11px] leading-relaxed">
                <div className="text-slate-500"># Initializing DCI Enterprise Shield Engine v4.2</div>
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <span>$&gt;</span>
                  <span>dci-soc analyze --target enterprise-cloud</span>
                </div>
                <div className="text-emerald-400 font-semibold pl-4">✓ Zero-Trust Identity Gateway: ONLINE</div>
                <div className="text-emerald-400 font-semibold pl-4">✓ XDR Real-time Telemetry: MONITORING</div>
                <div className="text-emerald-400 font-semibold pl-4">✓ AI Threat Anomaly Engine: ACTIVE</div>
                
                <div className="pt-2 flex items-center gap-2 text-purple-400 font-bold">
                  <span>$&gt;</span>
                  <span>dci-soc status --threats-24h</span>
                </div>

                {/* Status Box */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] space-y-2 font-sans">
                  <div className="flex justify-between text-slate-300">
                    <span>Active Attacks Blocked:</span>
                    <span className="text-cyan-400 font-bold font-mono">1,492 / hr</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Average Containment SLA:</span>
                    <span className="text-emerald-400 font-bold font-mono">0.42 Seconds</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Current Security Index:</span>
                    <span className="text-purple-400 font-bold font-mono">99.8% OPTIMAL</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>SYSTEM STATUS: ALL SHIELDS NOMINAL</span>
                  <span className="text-cyan-400 font-bold animate-pulse">● LIVE STREAM</span>
                </div>
              </div>

              {/* Bottom Quick Trigger */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between font-sans">
                <span className="text-[11px] text-slate-400">Evaluating security risk?</span>
                <button
                  onClick={() => openModal('consultation')}
                  className="text-[11px] text-cyan-400 hover:text-cyan-300 font-bold underline flex items-center gap-1"
                >
                  Book Instant SOC Consultation <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
