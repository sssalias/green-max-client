import { useQuery } from '@tanstack/react-query';
import { getAccountRequest } from '@/entities/account/api';

export const useGetAccount = () =>
  useQuery({
    queryKey: ['/account'],
    queryFn: getAccountRequest,
  });
