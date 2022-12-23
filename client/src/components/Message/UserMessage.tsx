import { Flex, Image, Text } from '@chakra-ui/react';
import { ForwardRefRenderFunction, forwardRef } from 'react';

interface IUserMessageForwardRefProps {
  message: string;
}

const UserMessageForwardRef: ForwardRefRenderFunction<
  HTMLDivElement,
  IUserMessageForwardRefProps
> = ({ message }, ref) => {
  if (message.includes('f')) {
    return (
      <Flex
        ref={ref}
        justifyContent="flex-end"
        mx="16"
      >
        <Image
          src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          w="360px"
          h="240px"
          id="message"
        />
      </Flex>
    );
  }

  return (
    <Flex
      ref={ref}
      justifyContent="flex-end"
      mx="16"
    >
      <Text
        bg="blue"
        p="1"
        color="white"
        borderRadius="md"
        px="4"
      >
        {message}
      </Text>
    </Flex>
  );
};

export const UserMessage = forwardRef(UserMessageForwardRef);
