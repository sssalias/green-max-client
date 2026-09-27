import styles from './chat-send-button.module.css';
import { UiButton } from '@/shared/ui';
import { useSendMessage } from '@/features/chat-input';
import { SendHorizonal } from 'lucide-react';

export default function ChatSendButton({
  chatId,
  message,
  clearMessage,
}: {
  chatId: string;
  message: string;
  clearMessage: () => void;
}) {
  const { mutateAsync } = useSendMessage({ chatId, message });

  const handleClick = async () => {
    await mutateAsync();
    clearMessage();
  };

  return (
    <UiButton onClick={handleClick} className={styles.chatSendButton}>
      <SendHorizonal />
    </UiButton>
  );
}
