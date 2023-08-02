import Image from 'next/image';
import Input from '../common/Input';
import * as styles from './steps.css';
import { IFormProps } from '@/types/form';

interface Props extends IFormProps {}

export default function Contact({ register }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <p className={styles.caption}>연락처 입력</p>
        <h2 className={styles.heading}>
          이메일과 연락처를 <br /> 입력해주세요.
        </h2>
      </div>
      <div>
        <div>
          <p
            style={{
              marginBottom: 8,
            }}
          >
            이메일
          </p>
          <div className={styles.flex}>
            <label htmlFor="email" className={styles.label}>
              <Image
                src="/icons/mail.svg"
                width={20}
                height={24}
                alt="portfolio"
              />
            </label>
            <Input
              label="email"
              register={register}
              id="email"
              name="email"
              type="email"
              placeholder="example@witi.com"
            />
          </div>
          <div
            style={{
              width: `100%`,
              height: 8,
            }}
          />
          <p
            style={{
              marginBottom: 8,
            }}
          >
            연락처
          </p>
          <div className={styles.flex}>
            <label htmlFor="phone" className={styles.label}>
              <Image
                src="/icons/phone.svg"
                width={20}
                height={24}
                alt="portfolio"
              />
            </label>
            <Input
              label="phone"
              register={register}
              id="phone"
              name="phone"
              type="phone"
              placeholder="12345678"
            />
          </div>
          <div
            style={{
              width: `100%`,
              height: 28,
            }}
          />
        </div>
      </div>
    </div>
  );
}
