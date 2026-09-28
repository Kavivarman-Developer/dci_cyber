import React, { useState, useEffect } from 'react';
import { ShieldAlert, UserCheck, Menu, X, Radio } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COMPANY_DETAILS } from '../data/mockData';

export default function Navbar() {
  const { backendStatus, openModal } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'SOC Monitor', href: '#soc-monitor' },
    { label: 'Cyber Audit', href: '#audit-tool' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Branding - Official Golden Earth Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] group-hover:scale-105 transition-all">
              <img
                src="/dci_logo.png"
                alt="DCI Cyber & Tech Logo"
                className="w-full h-full object-cover rounded-full"
              />
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-base sm:text-lg tracking-wider text-white font-mono whitespace-nowrap">
                  DCI <span className="text-amber-400">CYBER</span> & <span className="text-cyan-400">TECH</span>
                </span>
              </div>
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono whitespace-nowrap">
                SOLUTIONS PVT LTD
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-xs uppercase tracking-wider font-extrabold text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            
            {/* Live SOC Status Indicator */}
            <div
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono whitespace-nowrap shadow-md"
              title={`Backend API: ${backendStatus.status}`}
            >
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="text-slate-300 text-[11px] font-semibold">SOC LIVE 24/7</span>
            </div>

            {/* Client Portal Button */}
            <button
              onClick={() => openModal('portal')}
              className="whitespace-nowrap flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white transition-all shadow-md"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Portal</span>
            </button>

            {/* Audit Wizard CTA */}
            <button
              onClick={() => openModal('audit')}
              className="whitespace-nowrap flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all hover:scale-[1.02]"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Free Audit Wizard</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => openModal('audit')}
              className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold"
            >
              Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-4 p-5 rounded-2xl bg-slate-950/95 border border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-amber-400 font-bold">SOC STATUS: 24/7 ACTIVE</span>
              <span className="text-xs text-slate-400">{COMPANY_DETAILS.shortName}</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal('portal');
                }}
                className="w-full py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-200 text-center"
              >
                Client Portal Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal('audit');
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-extrabold text-sm text-center shadow-lg"
              >
                Launch Free Security Audit
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
