import type { AvatarRequestDto, AvatarResponseDto } from '@/entities/avatar/api/dto';
import { apiInstance } from '@/shared/api';

export const getAvatarRequest = async (dto: AvatarRequestDto): Promise<AvatarResponseDto> => {
  try {
    const response = await apiInstance.post<AvatarResponseDto>('/getAvatar', dto);

    return response.data;
  } catch (e) {
    throw e;
  }
};
