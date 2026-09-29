import styles from './new-chat-modal.module.css';
import { UiBadge, UiButton, UiInput, UiModal } from '@/shared/ui';
import { useState } from 'react';
import { NewChatButton } from '@/features/new-chat/ui/new-chat-button';
import { useCheckAccount } from '@/features/new-chat/model';
import { useDebounce } from '@/shared/lib';
import { useIMask } from 'react-imask';

export default function NewChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { ref, unmaskedValue, setValue } = useIMask({
    mask: '+7 (000) 000-00-00',
    lazy: false,
  });

  const { mutateAsync } = useCheckAccount({
    onError: (msg) => setError(msg),
    onSuccess: () => {
      setValue('');
      setIsOpen(false);
    },
  });

  const debouncedMutate = useDebounce((num: number) => mutateAsync(num), 500);

  const handleClose = () => {
    setIsOpen(false);
    setValue('');
    setError(null);
  };

  return (
    <>
      <NewChatButton onOpen={() => setIsOpen(true)} />
      <UiModal title="Новый чат" open={isOpen} onClose={handleClose}>
        <div className={styles.newChatModalWrapper}>
          {error && <UiBadge variant="danger">{error}</UiBadge>}

          <UiInput
            ref={ref as any}
            type="tel"
            label="Номер телефона"
            placeholder="+7 (___) ___-__-__"
          />

          <UiButton
            onClick={() => debouncedMutate(+unmaskedValue)}
            disabled={unmaskedValue.length < 10}
          >
            Начать чат
          </UiButton>
        </div>
      </UiModal>
    </>
  );
}
