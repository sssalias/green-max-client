import { useQuery } from '@tanstack/react-query';
import { type AvatarRequestDto, getAvatarRequest } from '@/entities/avatar/api';

export const useGetAvatar = (dto: AvatarRequestDto) =>
  useQuery({
    queryKey: [`/avatar`, dto.chatId],
    queryFn: () => getAvatarRequest(dto),
  });
