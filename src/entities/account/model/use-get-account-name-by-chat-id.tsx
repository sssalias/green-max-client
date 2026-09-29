import { useQuery } from '@tanstack/react-query';
import { getContactInfoRequest } from '@/entities/account';
import { queryKeys } from '@/shared/api';

export const useGetAccountNameByChatId = (chatId: string) =>
  useQuery({
    queryKey: queryKeys.account.byChatId(chatId),
    queryFn: () => getContactInfoRequest(chatId),
  });
