import styles from './chat-header.module.css';
import { useGetAccountNameByChatId } from '@/entities/account';

export default function ChatHeader({ chatId }: { chatId: string }) {
  const { data: account } = useGetAccountNameByChatId(chatId);
  return (
    <div className={styles.chatHeader}>
      <h1 className={styles.chatHeaderHeading}>{account?.name}</h1>
    </div>
  );
}
