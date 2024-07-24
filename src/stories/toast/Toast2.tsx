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
    alert('addMessage');
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
    const { addMessage } = UseToast();
    addMessage(message, 'error');
  },
  info: (message: string) => {
    const { addMessage } = UseToast();
    addMessage(message, 'info');
  },
};
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// type UserContextType = {
//   addName: (name: string, age?: number) => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UseUser = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// };

// export const UserProvider = ({ children }: { children: ReactNode }) => {
//   const [name, setName] = useState<string>('John Doe');

//   const addName = useCallback((name: string, age?: number) => {
//     console.log('TestName 클릭', name, age);
//   }, []);

//   return (
//     <UserContext.Provider value={{ addName }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const Test2 = {
//   aaa: (name: string, age?: number) => {
//     const { addName } = UseUser();
//     addName(name, age);
//   }
// }

// ////////////////////////////
// type UserContextType = {
//   name: string;
//   setName: (name: string) => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider = ({ children }: { children: ReactNode }) => {
//   const [name, setName] = useState<string>('John Doe');

//   return (
//     <UserContext.Provider value={{ name, setName }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// };

// //
// export const UserDisplay = () => {
//   const { name } = useUser();

//   return <div>User Name: {name}</div>;
// };

// //
// export const UserUpdate = () => {
//   const { setName } = useUser();
//   const [newName, setNewName] = useState('');

//   const updateName = () => {
//     setName(newName);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={newName}
//         onChange={(e) => setNewName(e.target.value)}
//         placeholder="Enter new name"
//       />
//       <button onClick={updateName}>Update Name</button>
//     </div>
//   );
// };