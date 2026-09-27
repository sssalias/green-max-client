import { useEffect, useState, useCallback } from 'react';
import './ui.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (open) {
      setExiting(false);
      setVisible(true);
    } else if (visible) {
      setExiting(true);
    }
  }, [open, visible]);

  const handleAnimationEnd = useCallback(() => {
    if (exiting) {
      setVisible(false);
    }
  }, [exiting]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
        handleAnimationEnd();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!visible) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [visible, onClose]);

  if (!visible) return null;

  const animationClass = exiting ? 'ui-modal--exit' : 'ui-modal--enter';

  return (
    <div className="ui-modal-overlay" onClick={handleOverlayClick}>
      <div
        className={`ui-modal ${animationClass}`}
        role="dialog"
        aria-modal="true"
        onAnimationEnd={handleAnimationEnd}
      >
        {title && (
          <div className="ui-modal__header">
            <h2 className="ui-modal__title">{title}</h2>
            <button className="ui-modal__close" onClick={onClose} aria-label="Close">
              &times;
            </button>
          </div>
        )}
        <div className="ui-modal__body">{children}</div>
      </div>
    </div>
  );
}
