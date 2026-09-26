import { useState, useCallback } from 'react';
import './ui.css';

interface UiInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  shakeOnError?: boolean;
}

export default function UiInput({
  label,
  error,
  shakeOnError = false,
  className = '',
  onChange,
  ...rest
}: UiInputProps) {
  const [shaking, setShaking] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (shakeOnError && error) {
        setShaking(true);
      }
      onChange?.(e);
    },
    [error, shakeOnError, onChange],
  );

  const handleAnimationEnd = useCallback(() => {
    setShaking(false);
  }, []);

  const errorClass = error ? 'ui-input--error' : '';
  const shakeClass = shaking && shakeOnError ? 'ui-input--shake' : '';

  return (
    <div className="ui-input-wrapper">
      {label && <label className="ui-input-label">{label}</label>}
      <input
        className={`ui-input ${errorClass} ${shakeClass} ${className}`}
        onChange={handleChange}
        onAnimationEnd={handleAnimationEnd}
        aria-invalid={!!error}
        {...rest}
      />
      {error && <span className="ui-input-label" style={{ color: 'var(--color-danger)' }}>{error}</span>}
    </div>
  );
}