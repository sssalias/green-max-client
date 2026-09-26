import { useState, useCallback } from 'react';
import './ui.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface UiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  active?: boolean;
}

export default function UiButton({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  active = false,
  className = '',
  disabled,
  onClick,
  ...rest
}: UiButtonProps) {
  const [bumping, setBumping] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return;
      setBumping(true);
      onClick?.(e);
    },
    [disabled, loading, onClick],
  );

  const handleAnimationEnd = useCallback(() => {
    setBumping(false);
  }, []);

  const sizeClass = size !== 'md' ? `ui-button--${size}` : '';
  const bumpClass = bumping || active ? 'ui-button--active' : '';
  const loadingClass = loading ? 'ui-button--loading' : '';

  return (
    <button
      className={`ui-button ui-button--${variant} ${sizeClass} ${bumpClass} ${loadingClass} ${className}`}
      disabled={disabled || loading}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      {...rest}
    >
      {loading ? '...' : children}
    </button>
  );
}