import { useState, useCallback } from 'react';
import './ui.css';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export default function IconButton({
  icon,
  size = 'md',
  className = '',
  disabled,
  onClick,
  ...rest
}: IconButtonProps) {
  const [bumping, setBumping] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      setBumping(true);
      onClick?.(e);
    },
    [disabled, onClick],
  );

  const handleAnimationEnd = useCallback(() => {
    setBumping(false);
  }, []);

  return (
    <button
      className={`ui-icon-button ui-icon-button--${size} ${bumping ? 'ui-icon-button--bump' : ''} ${className}`}
      disabled={disabled}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      {...rest}
    >
      {icon}
    </button>
  );
}