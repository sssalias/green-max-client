import { describe, it, expect, beforeEach } from 'vitest';
import { validateLoginUser } from './validate-login-user';
import { loginUser } from './login-user';
import { getLoginData } from './get-login-data';
import { LoginStorage } from '@/features/login/lib';
import type { LoginData } from '@/features/login/model';

const validData: LoginData = {
  idInstance: 'test-id',
  apiTokenInstance: 'test-token',
};

describe('validateLoginUser', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns false when no data', () => {
    expect(validateLoginUser()).toBe(false);
  });

  it('returns true with valid data', () => {
    LoginStorage.saveLoginData(validData);
    expect(validateLoginUser()).toBe(true);
  });

  it('returns false with empty idInstance', () => {
    LoginStorage.saveLoginData({ idInstance: '', apiTokenInstance: 'token' });
    expect(validateLoginUser()).toBe(false);
  });

  it('returns false with empty apiTokenInstance', () => {
    LoginStorage.saveLoginData({ idInstance: 'id', apiTokenInstance: '' });
    expect(validateLoginUser()).toBe(false);
  });
});

describe('loginUser', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('saves valid data', () => {
    loginUser(validData);
    expect(getLoginData()).toEqual(validData);
  });

  it('throws on empty idInstance', () => {
    expect(() => loginUser({ idInstance: '', apiTokenInstance: 'token' })).toThrow(
      'Заполните все поля для входа',
    );
  });

  it('throws on empty apiTokenInstance', () => {
    expect(() => loginUser({ idInstance: 'id', apiTokenInstance: '' })).toThrow(
      'Заполните все поля для входа',
    );
  });
});

describe('getLoginData', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns null when empty', () => {
    expect(getLoginData()).toBeNull();
  });

  it('returns saved data', () => {
    LoginStorage.saveLoginData(validData);
    expect(getLoginData()).toEqual(validData);
  });
});
