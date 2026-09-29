import { sendMessageRequest, type SendMessageRequestDto } from '@/features/chat-input/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MessageEntity } from '@/entities/message';
import type { ChatDto } from '@/entities/chat/api/dto';
import { queryKeys } from '@/shared/api';

export const useSendMessage = (dto: SendMessageRequestDto) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: queryKeys.sendMessage(dto.chatId, dto.message),
    mutationFn: () => sendMessageRequest(dto),
    onSuccess: (data) => {
      const chats = queryClient.getQueryData(queryKeys.chats.all()) as ChatDto[];
      const message = MessageEntity.create(data.idMessage, dto.message, 'outgoing', new Date());

      if (chats.find((el) => el.chatId === dto.chatId)) {
        queryClient.setQueryData(queryKeys.chatHistory.byChatId(dto.chatId), (state: MessageEntity[]) => {
          return [...state, message];
        });

        return;
      }

      queryClient.refetchQueries({ queryKey: queryKeys.chats.all() });
      queryClient.refetchQueries({ queryKey: queryKeys.chatHistory.byChatId(dto.chatId) });

      queryClient.setQueryData(queryKeys.chatHistory.byChatId(dto.chatId), (state: MessageEntity[]) => {
        return [...state, message];
      });

      return;
    },
  });
};
