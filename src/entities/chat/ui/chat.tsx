import styles from './chat.module.css';
import type { ChatDto } from '@/entities/chat/api/dto';
import clsx from 'clsx';

export default function Chat({
  chat,
  avatar,
  onClick,
  active = false,
}: {
  chat: ChatDto;
  avatar: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <div onClick={onClick} className={clsx(styles.chat, active && styles.chatActive)}>
      <div className={styles.chatAvatarContainer}>{avatar}</div>
      <div className={styles.chatInfo}>
        <h3 className={styles.chatInfoName}>{chat.name}</h3>
      </div>
    </div>
  );
}
