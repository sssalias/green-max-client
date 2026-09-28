import styles from './chat-send-button.module.css';
import { UiButton } from '@/shared/ui';
import { useSendMessage } from '@/features/chat-input';
import { useDebounce } from '@/shared/lib';
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

  const debouncedSend = useDebounce(async () => {
    await mutateAsync();
    clearMessage();
  }, 300);

  return (
    <UiButton onClick={debouncedSend} className={styles.chatSendButton}>
      <SendHorizonal />
    </UiButton>
  );
}
