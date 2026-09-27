import styles from './chat-view.module.css';
import { ChatFeed } from '@/features/chat-feed';
import { ChatMessages } from '@/features/chat-messages';
import { ChatInput } from '@/features/chat-input';
import { Panel } from '@/widgets/chat/ui/panel';
import { NewChatModal } from '@/features/new-chat';

export default function ChatView() {
  return (
    <div className={styles.chatViewContainer}>
      <div className={styles.chatViewAside}>
        <NewChatModal />
        <Panel />
        <ChatFeed />
      </div>
      <div className={styles.chatMessagesContainer}>
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
}
