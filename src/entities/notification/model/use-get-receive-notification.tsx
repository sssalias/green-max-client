import { useQuery } from '@tanstack/react-query';
import { getReceiveNotification } from '@/entities/notification/api';
import { queryKeys } from '@/shared/api';

export const useGetReceiveNotification = () =>
  useQuery({
    queryKey: queryKeys.notifications.receive(),
    queryFn: () => getReceiveNotification(),
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });
