import { apiInstance } from '@/shared/api';

export const deleteNotification = async (receiptId: string) => {
  try {
    const response = await apiInstance.delete(`/deleteNotification/${receiptId}`);

    return response.data;
  } catch (e) {
    throw e;
  }
};
