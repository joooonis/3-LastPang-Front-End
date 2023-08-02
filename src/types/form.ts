import { UseFormRegister } from 'react-hook-form';

export interface IFormValues {
  purpose: string;
  profile: string;
  nickname: string;
  introduce: string;
  portfolioTitle: string;
  portfolioLink: string;
  contact: string;
  sns: string;
}

export interface IFormProps {
  register: UseFormRegister<IFormValues>;
  watch?: (name: keyof IFormValues) => string;
  setValue?: (name: keyof IFormValues, value: string) => void;
}
