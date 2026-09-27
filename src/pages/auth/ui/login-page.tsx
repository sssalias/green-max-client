import styles from './login-page.module.css';
import { LoginForm } from '@/features/login';

export function LoginPage() {
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  );
}
