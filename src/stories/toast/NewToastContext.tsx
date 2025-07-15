// context/ToastContext.tsx
import React, { createContext, useState, useContext, useCallback } from 'react';
import { Toast, ToastContextType } from './types';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, duration = 3000, type: Toast['type'] = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, message, duration, type };

    console.log('Toast 추가:', newToast);
    console.log('현재 Toast 개수:', toasts.length + 1);

    setToasts((prevToasts) => [...prevToasts, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, [toasts.length]);

  const removeToast = useCallback((id: string) => {
    console.log('Toast 제거:', id);
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};