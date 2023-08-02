import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { IFormProps } from '@/types/form';

import * as styles from './steps.css';
import Button from '../common/Button';

interface Props extends IFormProps {}

export default function Profile({ register, watch }: Props) {
  const [preview, setPreview] = useState('');
  const avatar = watch && watch('profile');

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setPreview(URL.createObjectURL(file as any));
    }
  }, [avatar]);

  return (
    <div className={styles.cardWrapper}>
      <div>
        <p className={styles.caption}>프로필 사진 선택</p>
        <h2 className={styles.heading}>
          프로필에 사용할 <br />
          사진을 선택해주세요.
        </h2>
      </div>
      <label htmlFor="picture">
        <div className={styles.avatarContainer}>
          {preview ? (
            <Image
              src={preview}
              fill
              style={{
                objectFit: `cover`,
              }}
              alt="avatar"
            />
          ) : (
            <Image src="/user.svg" width={60} height={60} alt="avatar" />
          )}
        </div>
      </label>

      <div
        style={{
          marginTop: 40,
        }}
      >
        <Button
          onClick={() => {
            const input = document.getElementById('picture');
            input && input.click();
          }}
          variant="outline"
        >
          <Image
            style={{
              marginRight: 8,
            }}
            src="/upload.svg"
            width={24}
            height={24}
            alt="upload"
          />
          사진 찾아보기
        </Button>
      </div>

      <input
        {...register('profile')}
        id="picture"
        type="file"
        style={{
          display: `none`,
        }}
        accept="image/*"
      />
    </div>
  );
}
