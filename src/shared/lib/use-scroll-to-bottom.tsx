import { useLayoutEffect, useRef } from 'react';

export function useScrollToBottom<T>(dependency: T) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    element.scrollTop = element.scrollHeight;
  }, [dependency]);

  return ref;
}
