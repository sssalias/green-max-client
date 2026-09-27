import type { LoginData } from '@/features/login/model';

const loginDataKey = 'login-data';

type LoginStoragePort = {
  getLoginData(): LoginData | null;
  saveLoginData(data: LoginData): void;
};

const LocalStorageLoginStorageAdapter = {
  getLoginData(): LoginData | null {
    const data = localStorage.getItem(loginDataKey);

    if (!data) {
      return null;
    }

    return JSON.parse(data);
  },

  saveLoginData(data: LoginData) {
    localStorage.setItem(loginDataKey, JSON.stringify(data));
  },
} satisfies LoginStoragePort;

export const LoginStorage = LocalStorageLoginStorageAdapter;
