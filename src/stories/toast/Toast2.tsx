import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";


type Message = {
  id: number;
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
};

type ToastContextType = {
  addMessage: (message: string, type: Message['type']) => void;
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
    Root
  );
};



let idCounter = 0;

const ToastMessage = ({ messages, closeMessage }: { messages: Message[], closeMessage: (id: number) => void }) => {
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
      {/* <ToastContainer messages={messages} closeMessage={closeMessage} /> */}
      {children}
    </ToastContext.Provider>
  );
};

export const Toast2 = {
  success: (message: string) => {
    const { addMessage } = UseToast();
    addMessage(message, 'success');
  },
  warning: (message: string) => {
    const { addMessage } = UseToast();
    addMessage(message, 'warning');
  },
  error: (message: string) => {
    // const { addMessage } = UseToast();
    // addMessage(message, 'error');
    alert('aa');
  },
  info: (message: string) => {
    const { addMessage } = UseToast();
    addMessage(message, 'info');
  },
};
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
type UserContextType = {
  name: string;
  setName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>('John Doe');

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// 
export const UserDisplay = () => {
  const { name } = useUser();

  return <div>User Name: {name}</div>;
};

// 
export const UserUpdate = () => {
  const { setName } = useUser();
  const [newName, setNewName] = useState('');

  const updateName = () => {
    setName(newName);
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter new name"
      />
      <button onClick={updateName}>Update Name</button>
    </div>
  );
};