import { AppRouter } from '@/app/router';
import '@/shared/assets/ui.css';
import { LoginProvider } from '@/features/login';

export function App() {
  return (
    <LoginProvider>
      <AppRouter />
    </LoginProvider>
  );
}
