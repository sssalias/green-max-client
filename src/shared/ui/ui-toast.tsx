import { useEffect, useState, useCallback } from 'react';
import './ui.css';

type ToastVariant = 'success' | 'danger' | 'warning' | 'info';

interface UiToastProps {
  message: string;
  variant?: ToastVariant;
  visible?: boolean;
  duration?: number;
  onClose?: () => void;
}

export default function UiToast({
  message,
  variant = 'info',
  visible = false,
  duration = 3000,
  onClose,
}: UiToastProps) {
  const [isVisible, setIsVisible] = useState(visible);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsExiting(false);
      setIsVisible(true);
    }
  }, [visible]);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      handleClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [isVisible, duration]);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 320);
  }, [onClose]);

  if (!isVisible) return null;

  const animationClass = isExiting ? 'ui-toast--exit' : 'ui-toast--enter';

  return (
    <div className={`ui-toast ui-toast--${variant} ${animationClass}`}>
      {message}
    </div>
  );
}