import { useState, useMemo, createContext, useContext } from 'react';

export type MessageType = {
  author: string;
  body: string;
};

type MessageContextType = {
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
};

const MessageContext = createContext({} as MessageContextType);

type MessageProviderProps = {
  children: React.ReactNode;
};

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const providerValue = useMemo(() => ({ messages, setMessages }), [messages]);

  return (
    <MessageContext.Provider value={providerValue}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => {
  return useContext(MessageContext);
};
