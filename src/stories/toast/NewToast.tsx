import React from 'react';
import { Toast } from './types';
import { useToast } from './NewToastContext';

/**
 * 여기 토스트가 왜 안나와?
 * 
 * 1. ToastProvider로 컴포넌트를 감싸지 않았거나,
 * 2. ToastContainer가 실제로 렌더링되는 위치에 포함되어 있지 않거나,
 * 3. addToast가 호출되지 않아서 toasts 배열이 비어있거나,
 * 4. context import 경로가 잘못되었거나,
 * 5. 스타일이 화면에서 보이지 않는 위치에 있거나,
 * 6. z-index가 너무 낮거나,
 * 7. useToast 훅이 정상적으로 동작하지 않는 경우
 * 
 * 위의 사항들을 확인해보세요.
 */

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
      data-testid="toast-item"
    >
      <span>{message}</span>
      <button
        onClick={() => removeToast(id)}
        className="ml-4 text-white hover:text-gray-200"
        aria-label="닫기"
      >
        ×
      </button>
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  const { toasts } = useToast();

  // 디버깅용 로그 추가
  console.log('현재 toasts:', toasts);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </div>
  );
};