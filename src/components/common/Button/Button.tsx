import * as styles from './button.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
  [key: string]: any; // rest props
}

export default function Button({
  variant = 'solid',
  children,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={variant === 'solid' ? styles.solid : styles.outline}
    >
      {children}
    </button>
  );
}
