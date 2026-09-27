import styles from './chat-page.module.css';
import { ChatView } from '@/widgets/chat';

export function ChatPage() {
  return (
    <main className={styles.chatPage}>
      <ChatView />
    </main>
  );
}
