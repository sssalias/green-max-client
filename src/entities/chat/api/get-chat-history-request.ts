import type { ChatHistoryRequestDto, ChatHistoryResponseDto } from '@/entities/chat/api/dto';
import { apiInstance } from '@/shared/api';
import { MessageEntity } from '@/entities/message';

export const getChatHistoryRequest = async (
  dto: ChatHistoryRequestDto
): Promise<MessageEntity[]> => {
  try {
    const response = await apiInstance.post<ChatHistoryResponseDto[]>('/getChatHistory', dto);
    const mappedChatHistory = response.data
      .map((el) =>
        MessageEntity.create(el.idMessage, el.textMessage, el.type, new Date(el.timestamp * 1000))
      )
      .reverse();
    return mappedChatHistory;
  } catch (e) {
    throw e;
  }
};
