import { useLayoutEffect } from 'react';
import { validateLoginUser } from '@/features/login/model';
import { useLocation } from 'react-router-dom';

export function LoginProvider({ children }: { children: React.ReactNode }) {
  const currentLocation = useLocation();

  useLayoutEffect(() => {
    const isLogin = validateLoginUser();

    if (!isLogin && currentLocation.pathname !== '/login') {
      window.location.href = '/login';
      return;
    }
  }, []);
  return children;
}
