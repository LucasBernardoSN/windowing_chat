import { Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useSendMessage } from '../Chat/useSendMessage';

export function Footer() {
  const [inputValue, setInputValue] = useState('');
  const { sendMessage } = useSendMessage();

  const handleSendMessage = () => {
    sendMessage(inputValue);
    setInputValue('');
  };

  const handleSend10 = () => {
    [...Array(10).keys()].forEach(() => {
      sendMessage('');
    });
  };
  const handleSend1000 = () => {
    [...Array(1000).keys()].forEach(() => {
      sendMessage('');
    });
  };

  return (
    <Flex
      mx="16"
      gap="8"
    >
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') handleSendMessage();
        }}
        bg="slate3"
        _focus={{ bg: 'slate3' }}
        _hover={{ bg: 'slate3' }}
      />
      <Button onClick={() => handleSendMessage()}>Enviar</Button>
      <Button onClick={() => handleSend10()}>Enviar 10</Button>
      <Button onClick={() => handleSend1000()}>Enviar 1000</Button>
    </Flex>
  );
}
