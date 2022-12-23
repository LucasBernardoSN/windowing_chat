import { useRef, useEffect } from 'react';
import { VariableSizeList, VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Flex } from '@chakra-ui/react';
import { Message } from '../Message/Message.index';
import { useMessageContext } from '../Message/useMessage.context';
import { Footer } from '../Footer/Footer.index';

type RowHeight = {
  [index: number]: number;
};

export function Chat() {
  const { messages } = useMessageContext();

  const listRef = useRef<VariableSizeList<unknown>>(null);
  const rowHeights = useRef<RowHeight>({});

  function scrollToBottom() {
    listRef?.current?.scrollToItem(messages.length - 1, 'end');
  }

  function getRowHeight(index: number) {
    return rowHeights.current[index] + 8 || 82;
  }

  function setRowHeight(index: number, size: number) {
    listRef?.current?.resetAfterIndex(0);

    rowHeights.current = { ...rowHeights.current, [index]: size };
  }

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <Flex
      flexDirection="column"
      h="100vh"
      gap="4"
      bg="slate1"
    >
      <Flex
        h="600px"
        bg="slate3"
        p="4"
      >
        <AutoSizer>
          {({ height }) => (
            <List
              height={height}
              itemCount={messages.length}
              itemSize={(index) => getRowHeight(index)}
              ref={listRef}
              width={700}
              overscanCount={20}
            >
              {(props) => (
                <Flex>
                  <Message
                    {...props}
                    messages={messages}
                    setRowHeight={(arg1, arg2) => setRowHeight(arg1, arg2)}
                  />
                </Flex>
              )}
            </List>
          )}
        </AutoSizer>
      </Flex>
      length: {messages.length}
      <Footer />
    </Flex>
  );
}
