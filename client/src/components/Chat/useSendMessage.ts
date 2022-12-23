import { LoremIpsum } from 'lorem-ipsum';
import { useEffect } from 'react';
import { useSocket } from '../../context/Socket.context';
import { useMessageContext } from '../Message/useMessage.context';

const lorem = new LoremIpsum();

export function useSendMessage() {
  const { socket } = useSocket();
  const { setMessages } = useMessageContext();

  const sendMessage = (message: string) => {
    const msg = message || lorem.generateWords(5);

    socket?.emit('message', msg);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        author: 'me',
        body: msg,
      },
    ]);
  };

  useEffect(() => {
    if (socket) {
      socket.on('message', (message: string) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            author: 'them',
            body: message,
          },
        ]);
      });
    }

    return () => {
      socket?.off('message');
    };
  }, [setMessages, socket]);

  return { sendMessage };
}
