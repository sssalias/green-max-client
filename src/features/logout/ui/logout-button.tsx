import styles from './logout-button.module.css';
import { UiButton } from '@/shared/ui';
import { LogOut } from 'lucide-react';
import { useLogoutUser } from '@/features/logout/model';

export default function LogoutButton() {
  const { logoutUser } = useLogoutUser();

  return (
    <UiButton onClick={logoutUser} size="sm" variant="danger" className={styles.logoutButton}>
      <span>Выйти из аккаунта</span>
      <LogOut />
    </UiButton>
  );
}
