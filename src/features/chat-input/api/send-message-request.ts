import type { SendMessageRequestDto } from '@/features/chat-input/api/send-message-request-dto.ts';
import { apiInstance } from '@/shared/api';
import type { SendMessageResponseDto } from '@/features/chat-input/api/send-message-response-dto.ts';

export const sendMessageRequest = async (
  dto: SendMessageRequestDto
): Promise<SendMessageResponseDto> => {
  try {
    const response = await apiInstance.post<SendMessageResponseDto>('/sendMessage', dto);

    return response.data;
  } catch (e) {
    throw e;
  }
};
