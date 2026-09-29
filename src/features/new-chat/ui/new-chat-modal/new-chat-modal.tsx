import styles from './new-chat-modal.module.css';
import { UiBadge, UiButton, UiModal } from '@/shared/ui';
import { useState } from 'react';
import { NewChatButton } from '@/features/new-chat/ui/new-chat-button';
import { useCheckAccount } from '@/features/new-chat/model';
import { useDebounce } from '@/shared/lib';
import { IMaskInput } from 'react-imask';

export default function NewChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inputVersion, setInputVersion] = useState(0);

  const { mutateAsync } = useCheckAccount({
    onError: (msg) => setError(msg),
    onSuccess: () => {
      setPhoneNumber('');
      setInputVersion((version) => version + 1);
      setIsOpen(false);
    },
  });

  const debouncedMutate = useDebounce((num: number) => mutateAsync(num), 500);

  const handleClose = () => {
    setIsOpen(false);
    setPhoneNumber('');
    setInputVersion((version) => version + 1);
    setError(null);
  };

  return (
    <>
      <NewChatButton onOpen={() => setIsOpen(true)} />
      <UiModal title="Новый чат" open={isOpen} onClose={handleClose}>
        <div className={styles.newChatModalWrapper}>
          {error && <UiBadge variant="danger">{error}</UiBadge>}

          <div className="ui-input-wrapper">
            <label className="ui-input-label" htmlFor="new-chat-phone">
              Номер телефона
            </label>
            <IMaskInput
              key={inputVersion}
              id="new-chat-phone"
              mask="+{7} (000) 000-00-00"
              unmask
              lazy={false}
              type="tel"
              className="ui-input"
              placeholder="+7 (___) ___-__-__"
              onAccept={(value) => setPhoneNumber(value)}
            />
          </div>

          <UiButton
            onClick={() => debouncedMutate(Number(phoneNumber))}
            disabled={phoneNumber.length < 11}
          >
            Начать чат
          </UiButton>
        </div>
      </UiModal>
    </>
  );
}
