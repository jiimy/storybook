import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

/** 
 * NOTE:
 * <button onclick={() => toast.error('메시지') }></button>
 * 이런식으로 사용해보려 햇으나, 컴포넌트 형식이 아닌 함수형식의 사용은 스토리북에서 지원하지 않는듯 하다 (hook에러) 
*/
type Message = {
  id: number;
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
};

type ToastContextType = {
  // addMessage: (message: string, type: Message['type']) => void;
  getMessage: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const UseToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const ToastContainer = ({ messages, closeMessage }: { messages: Message[], closeMessage: (id: number) => void }) => {
  const Root = document.getElementById('root') as HTMLElement;

  return ReactDOM.createPortal(
    <ToastMessage messages={messages} closeMessage={closeMessage} />,
    // <div>포탈</div>,
    Root
  );
};

let idCounter = 0;

const ToastMessage = ({ messages, closeMessage }: { messages: Message[], closeMessage: (id: number) => void }) => {
  alert(`메시지 컴포넌트 : ${messages[0]}`)
  return (
    <div>
      {messages && messages.map((msg) => (
        <div key={msg.id}>
          {msg.message}
          <button onClick={() => closeMessage(msg.id)}>Close</button>
        </div>
      ))}
    </div>
  );
};

export const ToastProvider4 = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = useCallback((message: string, type: Message['type']) => {
    const newMessage: Message = {
      id: idCounter++,
      message,
      type,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    // alert(`addMessage: ${message}`);
  }, []);

  const closeMessage = useCallback((id: number) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  }, []);

  const getMessage = (message: string) => {
    alert(`message: ${message}`)
  }


  return (
    <ToastContext.Provider value={{ getMessage }}>
      <ToastContainer messages={messages} closeMessage={closeMessage} />
      {children}
    </ToastContext.Provider>
  );
};

export const Toast4 = {
  success: (message: string) => {
    const { getMessage } = UseToast();
    // addMessage(message, 'success');
    getMessage(message);
    // alert('클릭');
  },
  // warning: (message: string) => {
  //   const { addMessage } = UseToast();
  //   addMessage(message, 'warning');
  // },
  // error: (message: string) => {
  //   const { addMessage } = UseToast();
  //   addMessage(message, 'error');
  // },
  // info: (message: string) => {
  //   const { addMessage } = UseToast();
  //   addMessage(message, 'info');
  // },
};
