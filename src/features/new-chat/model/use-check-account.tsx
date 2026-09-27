import { useMutation } from '@tanstack/react-query';
import { checkAccountRequest } from '@/entities/account/api';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';

export const useCheckAccount = ({
  onError,
  onSuccess,
}: {
  onError: (msg: string) => void;
  onSuccess: () => void;
}) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (phoneNumber: number) => checkAccountRequest(phoneNumber),
    onSuccess: async (data) => {
      if (data.exist && data.chatId) {
        onSuccess();

        navigate(`/chat?id=${data.chatId}`);
        return;
      }
      onError('Пользователь с таким номером телефона не найден!');
      return;
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        if (err.status === 400) {
          onError('Неверный формат номера телефона!');
        }
      }
    },
  });
};
