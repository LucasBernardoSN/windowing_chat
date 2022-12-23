import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { io, Socket } from 'socket.io-client';

type SocketContextType = {
  socket: Socket | null;
};

const SocketContext = createContext({} as SocketContextType);

type SocketProviderProps = {
  children: ReactNode;
};

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketConnection = io('http://localhost:7777');
    setSocket(socketConnection);

    socketConnection.on('connect', () => {
      // eslint-disable-next-line no-console
      console.log('Connected to server');
    });

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  const providerValue = useMemo(() => ({ socket }), [socket]);

  return (
    <SocketContext.Provider value={providerValue}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};
