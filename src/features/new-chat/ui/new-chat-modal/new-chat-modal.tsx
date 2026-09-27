import styles from './new-chat-modal.module.css';
import { UiBadge, UiButton, UiInput, UiModal } from '@/shared/ui';
import { useState } from 'react';
import { NewChatButton } from '@/features/new-chat/ui/new-chat-button';
import { useCheckAccount } from '@/features/new-chat/model';

export default function NewChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const { mutateAsync } = useCheckAccount({
    onError: (msg) => setError(msg),
    onSuccess: () => {
      setPhoneNumber('');
      setIsOpen(false);
    },
  });

  return (
    <>
      <NewChatButton onOpen={() => setIsOpen(true)} />
      <UiModal title="Новый чат" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.newChatModalWrapper}>
          {error && <UiBadge variant="danger">{error}</UiBadge>}
          <UiInput
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            label="Номер телефона"
          />
          <UiButton onClick={() => mutateAsync(+phoneNumber)}>Начать чат</UiButton>
        </div>
      </UiModal>
    </>
  );
}
