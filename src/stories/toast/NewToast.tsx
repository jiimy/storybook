import React from 'react';
import { Toast } from './types';
import { useToast } from './NewToastContext';

const ToastItem: React.FC<Toast> = ({ id, message, type = 'info' }) => {
  const { removeToast } = useToast();

  const getBgColor = () => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div
      className={`${getBgColor()} text-white px-4 py-2 rounded-md shadow-lg mb-2 flex justify-between items-center`}
    >
      <span>{message}</span>
      <button
        onClick={() => removeToast(id)}
        className="ml-4 text-white hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </div>
  );
};