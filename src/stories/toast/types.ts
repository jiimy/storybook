export interface Toast {
  id: string;
  message: string;
  duration?: number;
  type?: 'info' | 'success' | 'warning' | 'error';
}

export interface ToastContextType {
  addToast: (message: string, duration?: number, type?: Toast['type']) => void;
  removeToast: (id: string) => void;
  toasts: Toast[];
}