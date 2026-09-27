import styles from './account-settings.module.css';
import { UiAvatar, UiButton, UiModal } from '@/shared/ui';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useGetAccount } from '@/entities/account';
import { LogoutButton } from '@/features/logout';

export default function AccountSettings() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: account } = useGetAccount();

  return (
    <>
      <UiButton onClick={() => setIsOpen(true)} variant="danger">
        <Menu />
      </UiButton>
      <UiModal
        title={
          <div className={styles.accountSettingsTitle}>
            <UiAvatar src={account?.avatar} />
            <span>Настройки аккаунта</span>
          </div>
        }
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className={styles.accountSettingsWrapper}>
          <table className={styles.accountSettingsTable}>
            <tbody>
              <tr>
                <td className={styles.accountSettingsTableTitle}>Телефон</td>
                <td>{account?.phone}</td>
              </tr>
              <tr>
                <td className={styles.accountSettingsTableTitle}>Ссылка приглашение</td>
                <td>
                  <a className={styles.accountInviteLink} href={account?.inviteLink}>
                    {account?.inviteLink}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <LogoutButton />
        </div>
      </UiModal>
    </>
  );
}
