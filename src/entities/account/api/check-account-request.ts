import { apiInstance } from '@/shared/api';
import type { CheckAccountResponseDto } from '@/entities/account/api/dto';

export const checkAccountRequest = async (
  phoneNumber: number
): Promise<CheckAccountResponseDto> => {
  try {
    const response = await apiInstance.post<CheckAccountResponseDto>('/checkAccount', {
      phoneNumber,
    });

    return response.data;
  } catch (e) {
    throw e;
  }
};
