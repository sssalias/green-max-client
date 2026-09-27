import styles from './panel.module.css';
import { AccountSettings } from '@/features/account';

export default function Panel() {
  return (
    <div className={styles.panel}>
      <AccountSettings />
    </div>
  );
}
