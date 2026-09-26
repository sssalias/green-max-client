import { useState, useCallback } from 'react';
import './ui.css';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
}

export default function Avatar({
  src,
  alt = 'Avatar',
  size = 'md',
  fallback,
  className = '',
  ...rest
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);

  const handleImgError = useCallback(() => {
    setImgError(true);
  }, []);

  const sizeClass = `ui-avatar--${size}`;
  const showFallback = !src || imgError;

  return (
    <div className={`ui-avatar ${sizeClass} ${className}`} {...rest}>
      {showFallback ? (
        <span className="ui-avatar__fallback">{fallback || alt.charAt(0).toUpperCase()}</span>
      ) : (
        <img className="ui-avatar__img" src={src} alt={alt} onError={handleImgError} />
      )}
    </div>
  );
}