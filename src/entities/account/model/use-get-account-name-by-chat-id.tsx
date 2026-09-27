import { useQuery } from '@tanstack/react-query';
import { getContactInfoRequest } from '@/entities/account';

export const useGetAccountNameByChatId = (chatId: string) =>
  useQuery({
    queryKey: ['/account', chatId],
    queryFn: () => getContactInfoRequest(chatId),
  });
