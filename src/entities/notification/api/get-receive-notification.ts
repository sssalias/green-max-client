import { apiInstance } from '@/shared/api';
import type { ReceiveNotificationResponseDto } from '@/entities/notification/api/dto';

export const getReceiveNotification = async (
  receiveTimeout: number = 5
): Promise<ReceiveNotificationResponseDto> => {
  try {
    const searchParams = new URLSearchParams({ receiveTimeout: receiveTimeout.toString() });
    const response = await apiInstance.get<ReceiveNotificationResponseDto>('/receiveNotification', {
      params: searchParams,
    });

    return response.data;
  } catch (e) {
    throw e;
  }
};
