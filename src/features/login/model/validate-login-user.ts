import { LoginStorage } from '@/features/login/lib';

export const validateLoginUser = (): boolean => {
  const loginData = LoginStorage.getLoginData();

  if (!loginData) {
    return false;
  }

  return true;
};
