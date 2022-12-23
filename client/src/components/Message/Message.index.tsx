import { useRef, useEffect } from 'react';
import { OtherMessage } from './OtherMessage';
import { MessageType } from './useMessage.context';
import { UserMessage } from './UserMessage';

type MessageProps = {
  index: number;
  style: React.CSSProperties;
  messages: MessageType[];
  setRowHeight: (index: number, height: number) => void;
};

export function Message({
  index,
  style,
  messages,
  setRowHeight,
}: MessageProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rowRef.current) {
      setRowHeight(index, rowRef.current.clientHeight);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div style={style}>
      {messages[index].author === 'me' ? (
        <UserMessage
          ref={rowRef}
          message={messages[index].body}
        />
      ) : (
        <OtherMessage
          ref={rowRef}
          message={messages[index].body}
        />
      )}
    </div>
  );
}
