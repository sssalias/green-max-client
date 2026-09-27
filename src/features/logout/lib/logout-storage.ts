const loginDataKey = 'logout-data';

type logoutStoragePort = {
  deleteLoginData(): void;
};

const LocalStorageLogoutStorageAdapter = {
  deleteLoginData(): void {
    localStorage.removeItem(loginDataKey);
  },
} satisfies logoutStoragePort;

export const LogoutStorage = LocalStorageLogoutStorageAdapter;
