import { useQuery } from '@tanstack/react-query';
import { getAccountRequest } from '@/entities/account/api';
import { queryKeys } from '@/shared/api';

export const useGetAccount = () =>
  useQuery({
    queryKey: queryKeys.account.all(),
    queryFn: getAccountRequest,
  });
