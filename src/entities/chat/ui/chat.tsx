import styles from './chat.module.css';
import type { ChatDto } from '@/entities/chat/api/dto';

export default function Chat({
  chat,
  avatar,
  onClick,
}: {
  chat: ChatDto;
  avatar: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick} className={styles.chat}>
      <div className={styles.chatAvatarContainer}>{avatar}</div>
      <div className={styles.chatInfo}>
        <h3 className={styles.chatInfoName}>{chat.name}</h3>
      </div>
    </div>
  );
}
