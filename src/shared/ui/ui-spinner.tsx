import { useEffect, useState, useCallback } from 'react';
import './ui.css';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export default function Spinner({ size = 'md', color }: SpinnerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = useCallback(() => {
    setVisible(false);
  }, []);

  if (!visible) return null;

  const sizeMap = { sm: 16, md: 24, lg: 40 };
  const diameter = sizeMap[size];
  const strokeWidth = size === 'sm' ? 2 : size === 'lg' ? 4 : 3;

  return (
    <div className="ui-spinner" style={{ width: diameter, height: diameter }} onAnimationEnd={handleAnimationEnd}>
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="ui-spinner__circle"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={color || 'var(--color-primary)'}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}