import React, { createContext, useContext, useState, useEffect } from 'react';
import { checkBackendHealth } from '../services/api';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [backendStatus, setBackendStatus] = useState({ status: 'checking', mongodb: 'checking' });
  const [activeModal, setActiveModal] = useState(null); // 'audit', 'estimator', 'portal', 'consultation'
  const [toastNotification, setToastNotification] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // Verify Python backend connectivity on mount
  useEffect(() => {
    async function verifyBackend() {
      const status = await checkBackendHealth();
      setBackendStatus(status);
    }
    verifyBackend();
    const interval = setInterval(verifyBackend, 30000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const showToast = (message, type = 'success') => {
    setToastNotification({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastNotification(null);
    }, 4000);
  };

  const openModal = (modalName, extraData = null) => {
    setActiveModal(modalName);
    if (extraData) setSelectedService(extraData);
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedService(null);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        backendStatus,
        activeModal,
        openModal,
        closeModal,
        toastNotification,
        showToast,
        selectedService,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
}
