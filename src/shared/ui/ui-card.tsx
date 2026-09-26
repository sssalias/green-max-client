import './ui.css';

interface UiCardProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  interactive?: boolean;
}

export default function UiCard({
  children,
  animated = false,
  interactive = false,
  className = '',
  ...rest
}: UiCardProps) {
  return (
    <div
      className={`ui-card ${animated ? 'ui-card--animated' : ''} ${interactive ? 'ui-card--interactive' : ''} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}