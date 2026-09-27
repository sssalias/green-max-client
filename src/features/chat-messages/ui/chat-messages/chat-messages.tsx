import styles from './chat-messages.module.css';
import { useChatId } from '@/features/chat-messages/lib';
import { ChatHistory } from '@/features/chat-messages/ui/chat-history';
import { ChatHeader } from '@/entities/chat';

export default function ChatMessages() {
  const chatId = useChatId();

  if (!chatId) {
    return (
      <div className={styles.chatMessages}>
        <div className={styles.chatMessagesWrapperEmpty}>
          <div className={styles.chatMessagesContainerEmpty}>
            <h3 className={styles.chatMessagesHeadingEmpty}>Выберите чат для общения</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chatMessages}>
      <ChatHeader chatId={chatId} />
      <ChatHistory chatId={chatId} />
    </div>
  );
}
