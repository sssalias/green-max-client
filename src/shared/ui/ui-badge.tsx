import './ui.css';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger';

interface UiBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  animated?: boolean;
}

export default function UiBadge({
  children,
  variant = 'primary',
  animated = false,
  className = '',
  ...rest
}: UiBadgeProps) {
  return (
    <span
      className={`ui-badge ui-badge--${variant} ${animated ? 'ui-badge--animated' : ''} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}