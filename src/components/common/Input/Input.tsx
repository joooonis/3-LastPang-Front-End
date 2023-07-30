import * as styles from './input.css';

interface Props {
  type: string;
  placeholder: string;
  isLabel?: boolean;
}

export default function Input({ type, placeholder, isLabel = false }: Props) {
  return (
    <div className={styles.wrapper}>
      {isLabel && <label>닉네임</label>}
      <input
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
