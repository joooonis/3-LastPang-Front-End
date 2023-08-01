import * as styles from './input.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  [key: string]: any;
}

export default function Input({ type, placeholder, ...rest }: Props) {
  return (
    <div className={styles.wrapper}>
      <input
        {...rest}
        className={styles.input}
        onFocus={(e) => {
          e.target.placeholder = '';
        }}
        onBlur={(e) => {
          e.target.placeholder = placeholder;
        }}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
