import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ToastNotification() {
  const { toastNotification } = useApp();

  if (!toastNotification) return null;

  const { message, type } = toastNotification;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border ${
        type === 'error'
          ? 'bg-red-50 border-red-200 text-red-800'
          : 'bg-slate-900 border-slate-800 text-white'
      }`}>
        {type === 'error' ? (
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        )}
        <span className="text-xs font-semibold">{message}</span>
      </div>
    </div>
  );
}
