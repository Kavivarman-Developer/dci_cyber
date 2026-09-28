import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, RefreshCw, Sparkles } from 'lucide-react';
import { submitContactInquiry } from '../services/api';
import { useApp } from '../context/AppContext';
import { COMPANY_DETAILS } from '../data/mockData';

export default function ContactSection() {
  const { showToast, selectedService } = useApp();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: selectedService ? selectedService.title : 'General Security Audit',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await submitContactInquiry(formData);
    setLoading(false);

    if (result.success) {
      showToast(result.message || 'Inquiry submitted successfully! Our DCI team will respond shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceInterest: 'General Security Audit',
        message: '',
      });
    } else {
      showToast('Form submission failed. Please try again.', 'error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-bold shadow-lg">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Schedule a Confidential Technical Consultation
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Connect directly with DCI's offensive security engineers and enterprise solution architects.
          </p>
        </div>

        {/* Form & Company Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900/90 p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6 backdrop-blur-xl">
              
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                  CORPORATE HEADQUARTERS
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {COMPANY_DETAILS.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1 font-medium">
                  CIN: {COMPANY_DETAILS.cin}
                </p>
              </div>

              <div className="space-y-4 text-xs font-sans text-slate-300 font-medium">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_DETAILS.address}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{COMPANY_DETAILS.email}</span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="font-mono text-emerald-300 font-bold">24/7 Managed SOC Emergency Hotline Active</span>
                </div>
              </div>

              {/* Global Locations */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Global Delivery Hubs:
                </span>
                <div className="flex flex-wrap gap-2">
                  {COMPANY_DETAILS.globalLocations.map((loc, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono font-bold text-slate-300"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/90 p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase block mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase block mb-1">Company / Entity</label>
                  <input
                    type="text"
                    placeholder="Organization Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-400 uppercase block mb-1">Primary Area of Interest</label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 outline-none font-semibold"
                >
                  <option value="General Security Audit">General Security Audit & VAPT</option>
                  <option value="24/7 Managed SOC">24/7 Managed SOC Operations</option>
                  <option value="Zero-Trust Architecture">Zero-Trust & IAM Migration</option>
                  <option value="Cloud Security & CSPM">Cloud Security (AWS/Azure/GCP)</option>
                  <option value="Enterprise Web & Mobile Engineering">Enterprise Web & Mobile Engineering</option>
                  <option value="AI & Automation Workflows">AI & GenAI Workflows</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-slate-400 uppercase block mb-1">Project Overview & Requirements</label>
                <textarea
                  rows={4}
                  placeholder="Describe your current tech stack, timeline, or security audit objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Transmitting Inquiry...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Confidential Technical Request</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
