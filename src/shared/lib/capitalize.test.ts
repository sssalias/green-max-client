import { describe, it, expect } from 'vitest';
import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('handles single character', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('does not change already capitalized', () => {
    expect(capitalize('World')).toBe('World');
  });

  it('handles non-string values', () => {
    expect(capitalize(123 as unknown as string)).toBe('123');
  });
});
