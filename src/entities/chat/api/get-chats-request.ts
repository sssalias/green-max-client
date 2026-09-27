import type { ChatDto } from '@/entities/chat/api/dto';
import { apiInstance } from '@/shared/api';

export const getChatsRequest = async (): Promise<ChatDto[]> => {
  try {
    const response = await apiInstance.get<ChatDto[]>(`/getChats`);
    return response.data;
  } catch (e) {
    throw e;
  }
};
