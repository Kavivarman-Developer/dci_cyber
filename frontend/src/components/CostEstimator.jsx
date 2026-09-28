import React, { useState } from 'react';
import { Calculator, Check, Send, CheckCircle2, Zap } from 'lucide-react';
import { submitQuoteEstimation } from '../services/api';
import { useApp } from '../context/AppContext';

export default function CostEstimator() {
  const { showToast, openModal } = useApp();
  const [tier, setTier] = useState('growth');
  const [currency, setCurrency] = useState('USD');
  const [addons, setAddons] = useState({
    vapt: true,
    soc: true,
    cloud: false,
    ai: false,
    compliance: false,
  });

  const basePrices = {
    startup: { USD: 2500, INR: 200000 },
    growth: { USD: 6500, INR: 520000 },
    enterprise: { USD: 15000, INR: 1200000 },
  };

  const addonPrices = {
    vapt: { USD: 1500, INR: 120000, label: 'Deep Penetration Testing (VAPT)' },
    soc: { USD: 2500, INR: 200000, label: '24/7 Managed SOC Telemetry (Monthly)' },
    cloud: { USD: 1800, INR: 145000, label: 'Multi-Cloud CSPM & Container Security' },
    ai: { USD: 3000, INR: 250000, label: 'Enterprise GenAI & RAG Agent Pipeline' },
    compliance: { USD: 2000, INR: 160000, label: 'ISO 27001 / SOC 2 Audit Readiness' },
  };

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  let total = basePrices[tier][currency];
  Object.keys(addons).forEach((key) => {
    if (addons[key]) {
      total += addonPrices[key][currency];
    }
  });

  const handleSaveEstimate = async () => {
    const payload = {
      tier,
      currency,
      addons,
      calculatedEstimate: total,
      timestamp: new Date().toISOString(),
    };

    const response = await submitQuoteEstimation(payload);
    if (response.success) {
      showToast(`Project estimate reference saved! ID: ${response.quoteId}`);
      openModal('consultation', { title: `Custom Quote Estimate (${currency === 'USD' ? '$' : '₹'}${total.toLocaleString()})` });
    }
  };

  return (
    <section id="estimator" className="py-24 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-800 text-purple-400 text-xs font-mono font-bold shadow-lg">
            <Calculator className="w-4 h-4 text-purple-400" />
            <span>TRANSPARENT PROJECT CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive Service Cost Estimator
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Configure technical scope, security requirements, and scale tier to calculate instant estimated project budgets.
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-extrabold transition-all ${
                currency === 'USD' ? 'bg-cyan-400 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-400 border border-slate-800'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-extrabold transition-all ${
                currency === 'INR' ? 'bg-cyan-400 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-400 border border-slate-800'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Configuration Panel */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Scale Tier */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                1. Select Engagement Tier
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'startup', label: 'Startup', desc: 'Core Defense', color: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300' },
                  { id: 'growth', label: 'Growth', desc: 'Full Stack + SOC', color: 'border-cyan-500/50 bg-cyan-950/40 text-cyan-300' },
                  { id: 'enterprise', label: 'Enterprise', desc: 'Custom Dedicated', color: 'border-purple-500/50 bg-purple-950/40 text-purple-300' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTier(t.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      tier === t.id
                        ? `${t.color} shadow-lg font-bold scale-[1.02]`
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-sm font-bold text-white">{t.label}</div>
                    <div className="text-[11px] text-slate-400 font-medium">{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-On Capabilities */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                2. Select Add-on Modules & Services
              </h3>
              <div className="space-y-2.5">
                {Object.keys(addonPrices).map((key) => {
                  const addon = addonPrices[key];
                  const selected = addons[key];
                  return (
                    <button
                      key={key}
                      onClick={() => toggleAddon(key)}
                      className={`w-full p-4 rounded-xl border flex items-center justify-between text-xs font-semibold transition-all ${
                        selected
                          ? 'bg-slate-900 border-cyan-500/60 text-white shadow-md'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          selected ? 'bg-cyan-400 border-cyan-400 text-slate-950 font-bold' : 'border-slate-700'
                        }`}>
                          {selected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{addon.label}</span>
                      </div>
                      <span className="font-mono text-cyan-400 font-bold">
                        +{currency === 'USD' ? '$' : '₹'}{addon[currency].toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Estimated Summary Box */}
          <div className="lg:col-span-5 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-400">ESTIMATED BUDGET</span>
              <span className="text-xs font-mono font-extrabold text-cyan-400 uppercase">TIER: {tier}</span>
            </div>

            <div className="space-y-2 text-center py-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                {currency === 'USD' ? '$' : '₹'}{total.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400">
                Estimated initial engagement budget with selected SLAs & support.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Includes Dedicated Technical Account Manager</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 SOC Telemetry Monitoring SLA Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Complete Code Audit & Security Deliverables</span>
              </div>
            </div>

            <button
              onClick={handleSaveEstimate}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Submit Request for Custom Proposal</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
