import { UiAvatar } from '@/shared/ui';
import { useGetAvatar } from '@/entities/avatar/model';

export function Avatar({ chatId }: { chatId: string }) {
  const { data: avatar } = useGetAvatar({ chatId });

  return <UiAvatar src={avatar?.urlAvatar} />;
}
