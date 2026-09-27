import styles from './chat-input.module.css';
import { UiTextarea } from '@/shared/ui';
import { ChatSendButton } from '@/features/chat-input/ui/chat-send-button';
import { useState } from 'react';
import { useChatId } from '@/features/chat-messages/lib';

export default function ChatInput() {
  const [message, setMessage] = useState<string>('');

  const chatId = useChatId();

  return (
    <div className={styles.chatInput}>
      <UiTextarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.chatInputTextarea}
      />
      <div className={styles.chatInputButtonGroup}>
        <ChatSendButton chatId={chatId!} message={message} clearMessage={() => setMessage('')} />
      </div>
    </div>
  );
}
