import { useQuery } from '@tanstack/react-query';
import { getReceiveNotification } from '@/entities/notification/api';

export const useGetReceiveNotification = () =>
  useQuery({
    queryKey: ['/recieve-motification'],
    queryFn: () => getReceiveNotification(),
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });
