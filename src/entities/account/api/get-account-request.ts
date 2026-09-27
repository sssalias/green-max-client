import { apiInstance } from '@/shared/api';
import type { AccountResponseDto } from '@/entities/account/api/dto';

export const getAccountRequest = async (): Promise<AccountResponseDto> => {
  try {
    const response = await apiInstance.get<AccountResponseDto>('/getAccountSettings');

    return response.data;
  } catch (e) {
    throw e;
  }
};
