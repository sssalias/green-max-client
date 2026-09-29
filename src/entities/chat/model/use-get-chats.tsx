import { useQuery } from '@tanstack/react-query';
import { getChatsRequest } from '@/entities/chat/api';
import { queryKeys } from '@/shared/api';

export const useGetChats = () =>
  useQuery({
    queryKey: queryKeys.chats.all(),
    queryFn: getChatsRequest,
  });
