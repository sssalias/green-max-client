import styles from './new-chat-button.module.css';
import { UiButton } from '@/shared/ui';
import { MessageCirclePlus } from 'lucide-react';

export default function NewChatButton({ onOpen }: { onOpen: () => void }) {
  return (
    <UiButton onClick={onOpen} className={styles.newChatButton}>
      <MessageCirclePlus />
    </UiButton>
  );
}
