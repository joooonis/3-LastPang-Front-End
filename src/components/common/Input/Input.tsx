import * as styles from './input.css';
import { IFormProps } from '@/types/form';

type InputProps = IFormProps & React.InputHTMLAttributes<HTMLInputElement>;
interface Props extends InputProps {
  type: string;
  placeholder: string;
  [key: string]: any;
}
export default function Input({
  type,
  label,
  placeholder,
  register,
  ...rest
}: Props) {
  return (
    <div className={styles.wrapper}>
      <input
        {...rest}
        {...register(label)}
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
