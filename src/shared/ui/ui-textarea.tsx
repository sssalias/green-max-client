import { useState, useCallback } from 'react';
import './ui.css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({
  label,
  error,
  className = '',
  onChange,
  ...rest
}: TextareaProps) {
  const [shaking, setShaking] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (error) setShaking(true);
      onChange?.(e);
    },
    [error, onChange],
  );

  const handleAnimationEnd = useCallback(() => {
    setShaking(false);
  }, []);

  return (
    <div className="ui-textarea-wrapper">
      {label && <label className="ui-textarea-label">{label}</label>}
      <textarea
        className={`ui-textarea ${error ? 'ui-textarea--error' : ''} ${shaking ? 'ui-textarea--shake' : ''} ${className}`}
        onChange={handleChange}
        onAnimationEnd={handleAnimationEnd}
        {...rest}
      />
      {error && <span className="ui-textarea-label ui-textarea-label--error">{error}</span>}
    </div>
  );
}