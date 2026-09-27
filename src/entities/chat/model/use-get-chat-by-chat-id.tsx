import { useQueryClient } from '@tanstack/react-query';
import type { ChatDto } from '@/entities/chat/api/dto';

export const useGetChatByChatId = (chatId: string) => {
  const queryClient = useQueryClient();

  const chats = queryClient.getQueryData(['/chats']) as ChatDto[] | undefined;

  return chats?.find((value) => value.chatId === chatId);
};
