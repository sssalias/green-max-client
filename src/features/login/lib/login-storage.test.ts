import { describe, it, expect, beforeEach } from 'vitest';
import { LoginStorage } from './login-storage';
import type { LoginData } from '@/features/login/model';

const mockData: LoginData = {
  idInstance: 'test-id',
  apiTokenInstance: 'test-token',
};

describe('LoginStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns null when no data', () => {
    expect(LoginStorage.getLoginData()).toBeNull();
  });

  it('saves and retrieves data', () => {
    LoginStorage.saveLoginData(mockData);
    expect(LoginStorage.getLoginData()).toEqual(mockData);
  });

  it('overwrites existing data', () => {
    LoginStorage.saveLoginData(mockData);
    const newData: LoginData = { idInstance: 'new-id', apiTokenInstance: 'new-token' };
    LoginStorage.saveLoginData(newData);
    expect(LoginStorage.getLoginData()).toEqual(newData);
  });

  it('persists across calls', () => {
    LoginStorage.saveLoginData(mockData);
    const first = LoginStorage.getLoginData();
    const second = LoginStorage.getLoginData();
    expect(first).toEqual(second);
  });
});
