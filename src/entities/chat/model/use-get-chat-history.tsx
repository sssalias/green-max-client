import type { ChatHistoryRequestDto } from '@/entities/chat/api/dto';
import { useQuery } from '@tanstack/react-query';
import { getChatHistoryRequest } from '@/entities/chat/api';

export const useGetChatHistory = (dto: ChatHistoryRequestDto) =>
  useQuery({
    queryKey: [`/chat-history`, dto.chatId],
    queryFn: () => getChatHistoryRequest(dto),
  });
