import { describe, it, expect } from 'vitest';
import { apiInstance } from './api-instance';

describe('apiInstance', () => {
  it('has correct baseURL', () => {
    expect(apiInstance.defaults.baseURL).toBe(import.meta.env.VITE_API_URL);
  });
});
