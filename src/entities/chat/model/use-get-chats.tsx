import { useQuery } from '@tanstack/react-query';
import { getChatsRequest } from '@/entities/chat/api';

export const useGetChats = () =>
  useQuery({
    queryKey: ['/chats'],
    queryFn: getChatsRequest,
  });
