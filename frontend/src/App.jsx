import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreatMonitor from './components/ThreatMonitor';
import SecurityAuditTool from './components/SecurityAuditTool';
import ServicesShowcase from './components/ServicesShowcase';
import CostEstimator from './components/CostEstimator';
import CaseStudies from './components/CaseStudies';
import ContactSection from './components/ContactSection';
import ClientPortalModal from './components/ClientPortalModal';
import ToastNotification from './components/ToastNotification';
import Footer from './components/Footer';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-cyber-bg text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <ThreatMonitor />
          <ServicesShowcase />
          <SecurityAuditTool />
          <CostEstimator />
          <CaseStudies />
          <ContactSection />
        </main>
        <Footer />
        
        {/* Modals & Overlays */}
        <ClientPortalModal />
        <ToastNotification />
      </div>
    </AppProvider>
  );
}
