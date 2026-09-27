import { apiInstance } from '@/shared/api';
import type { ContactInfoResponseDto } from '@/entities/account/api/dto';

export const getContactInfoRequest = async (chatId: string) => {
  try {
    const response = await apiInstance.post<ContactInfoResponseDto>('/getContactInfo', { chatId });

    return response.data;
  } catch (e) {
    throw e;
  }
};
