import React, { createContext, useContext, useState, useCallback, ReactNode, ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';

type Message = {
  id: number;
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
};

type ToastContextType = {
  addMessage: (message: string, type: Message['type']) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const useToast = () => {
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
    Root
  );
};

let idCounter = 0;

const ToastMessage = ({ messages, closeMessage }: { messages: Message[], closeMessage: (id: number) => void }) => {
  // useEffect(() => {
  //   alert('열림');
  // }, [])
  return (
    <div>
      {messages.map((msg) => (
        <div key={msg.id}>
          {msg.message}
          <button onClick={() => closeMessage(msg.id)}>Close</button>
        </div>
      ))}
    </div>
  );
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = useCallback((message: string, type: Message['type']) => {
    console.log('실행');
    const newMessage: Message = {
      id: idCounter++,
      message,
      type,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  const closeMessage = useCallback((id: number) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  }, []);


  return (
    <ToastContext.Provider value={{ addMessage }}>
      <ToastContainer messages={messages} closeMessage={closeMessage} />
      {children}
    </ToastContext.Provider>
  );
};

type ToastProps = {
  type: Message['type'];
  children: ReactNode;
};

export const Toast3 = ({ type, children }: ToastProps): ReactElement | null => {
  const { addMessage } = useToast();

  useEffect(() => {
    if (children) {
      addMessage(children.toString(), type);
    }
  }, [children, type, addMessage]);

  return null;
};