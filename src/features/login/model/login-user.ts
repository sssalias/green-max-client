import type { LoginData } from '@/features/login/model/login-data.ts';
import { LoginStorage } from '@/features/login/lib';

export const loginUser = (data: LoginData) => {
  if (data.idInstance.length === 0 || data.apiTokenInstance.length === 0) {
    throw new Error('Заполните все поля для входа');
  }
  return LoginStorage.saveLoginData(data);
};
