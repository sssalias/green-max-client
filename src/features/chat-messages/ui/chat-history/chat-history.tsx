import styles from './chat-history.module.css';
import { useGetChatHistory } from '@/entities/chat';
import { Message, MessageEntity } from '@/entities/message';
import { useDeleteNotification, useGetReceiveNotification } from '@/entities/notification';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useScrollToBottom } from '@/shared/lib';

export default function ChatHistory({ chatId }: { chatId: string }) {
  const queryClient = useQueryClient();
  const { data: chatHistory } = useGetChatHistory({ chatId, count: 100 });

  const { data: receivedNotification } = useGetReceiveNotification();

  const { mutateAsync } = useDeleteNotification();

  useEffect(() => {
    if (receivedNotification && receivedNotification?.receiptId !== null) {
      mutateAsync(receivedNotification?.receiptId);

      if (
        receivedNotification.body.senderData.chatId === chatId &&
        receivedNotification.body.messageData.typeMessage !== 'buttonsMessage'
      ) {
        queryClient.setQueryData(['/chat-history', chatId], (state: MessageEntity[]) => {
          const receivedMessage = MessageEntity.create(
            receivedNotification.body.idMessage,
            receivedNotification.body.messageData.textMessageData.textMessage,
            'incoming',
            new Date(receivedNotification.body.timestamp)
          );
          console.log(receivedMessage);
          return [...state, receivedMessage];
        });
      }
    }
  }, [receivedNotification]);

  const chatHistoryRef = useScrollToBottom(chatHistory);

  return (
    <div ref={chatHistoryRef} className={styles.chatHistory}>
      {chatHistory?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
