import React from 'react';
import { COMPANY_DETAILS } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Branding with New Golden Logo */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.3)] shrink-0">
                <img
                  src="/dci_logo.png"
                  alt="DCI Cyber & Tech Official Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-wider text-white font-mono">
                  DCI <span className="text-amber-400">CYBER</span> & <span className="text-cyan-400">TECH</span>
                </span>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">
                  SOLUTIONS PRIVATE LIMITED
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_DETAILS.description}
            </p>

            <div className="pt-2 text-[11px] font-mono text-slate-400">
              CIN: {COMPANY_DETAILS.cin} | ISO 27001 Certified
            </div>
          </div>

          {/* Col 2: Cyber Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Cyber Defense
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Vulnerability Assessment (VAPT)</a></li>
              <li><a href="#soc-monitor" className="hover:text-amber-400 transition-colors">24/7 Managed SOC Telemetry</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Zero-Trust Architecture</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Cloud Security & CSPM</a></li>
              <li><a href="#audit-tool" className="hover:text-amber-400 transition-colors">Free Security Audit Tool</a></li>
            </ul>
          </div>

          {/* Col 3: Tech Engineering */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Tech Engineering
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Enterprise Web & Mobile</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">GenAI & Workflow RAG</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Kubernetes & DevOps</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Data Engineering & Analytics</a></li>
              <li><a href="#estimator" className="hover:text-amber-400 transition-colors">Interactive Cost Estimator</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Cyber Intelligence Feed
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe to DCI's monthly threat intelligence bulletin & security advisories.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="cto@company.com"
                className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} DCI CYBER AND TECH SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Security Disclosure</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
