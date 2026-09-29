import { useQueryClient } from '@tanstack/react-query';
import type { ChatDto } from '@/entities/chat/api/dto';
import { queryKeys } from '@/shared/api';

export const useGetChatByChatId = (chatId: string) => {
  const queryClient = useQueryClient();

  const chats = queryClient.getQueryData(queryKeys.chats.all()) as ChatDto[] | undefined;

  return chats?.find((value) => value.chatId === chatId);
};
