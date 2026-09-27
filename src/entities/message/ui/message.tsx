import styles from './message.module.css';
import { MessageEntity } from '@/entities/message';
import clsx from 'clsx';
import { capitalize } from '@/shared/lib';

export function Message({ message }: { message: MessageEntity }) {
  return (
    <div className={clsx(styles.message, styles[`message${capitalize(message.type)}`])}>
      <div className={styles.messageWrapper}>
        <p>{message.text}</p>
        <time className={styles.messageTime}>
          {message.date.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/Moscow',
          })}
        </time>
      </div>
    </div>
  );
}
