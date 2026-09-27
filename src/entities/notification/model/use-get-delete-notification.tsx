import { useMutation } from '@tanstack/react-query';
import { deleteNotification } from '@/entities/notification/api';

export const useDeleteNotification = () =>
  useMutation({
    mutationFn: async (receiptId: string) => deleteNotification(receiptId),
  });
