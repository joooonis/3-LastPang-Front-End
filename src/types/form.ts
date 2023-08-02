import { UseFormRegister } from 'react-hook-form';

export interface IFormValues {
  purpose: string;
  profile: string;
  nickname: string;
  introduce: string;
  portfolio: string;
  contact: string;
  sns: string;
}

export interface InputProps {
  register: UseFormRegister<IFormValues>;
  watch?: (name: keyof IFormValues) => string;
  setValue?: (name: keyof IFormValues, value: string) => void;
}
