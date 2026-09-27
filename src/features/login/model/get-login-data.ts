import { LoginStorage } from '@/features/login/lib';

export const getLoginData = () => {
  return LoginStorage.getLoginData();
};
