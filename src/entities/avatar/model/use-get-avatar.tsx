import { useQuery } from '@tanstack/react-query';
import { type AvatarRequestDto, getAvatarRequest } from '@/entities/avatar/api';
import { queryKeys } from '@/shared/api';

export const useGetAvatar = (dto: AvatarRequestDto) =>
  useQuery({
    queryKey: queryKeys.avatar.byChatId(dto.chatId),
    queryFn: () => getAvatarRequest(dto),
  });
