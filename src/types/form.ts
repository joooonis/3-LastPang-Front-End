import { UseFormRegister } from 'react-hook-form';

export interface IFormValues {
  purpose: string;
  profile?: FileList | null;
  nickname: string;
  introduce: string;
  portfolioTitle: string;
  portfolioLink: string;
  phone: string;
  email: string;
  instagram: string;
  youtube: string;
  facebook: string;
  blog: string;
  twitter: string;
  [key: string]: any;
}

export interface IFormProps {
  register: UseFormRegister<IFormValues>;
  watch?: (name: keyof IFormValues) => string;
  setValue?: (name: string, value: string) => void;
}
