import type { ChatHistoryRequestDto } from '@/entities/chat/api/dto';
import { useQuery } from '@tanstack/react-query';
import { getChatHistoryRequest } from '@/entities/chat/api';
import { queryKeys } from '@/shared/api';

export const useGetChatHistory = (dto: ChatHistoryRequestDto) =>
  useQuery({
    queryKey: queryKeys.chatHistory.byChatId(dto.chatId),
    queryFn: () => getChatHistoryRequest(dto),
  });
