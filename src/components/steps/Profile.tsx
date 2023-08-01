import Image from 'next/image';
import * as styles from './steps.css';
import Button from '../common/Button';

export default function Profile() {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <p className={styles.caption}>프로필 사진 선택</p>
        <h2 className={styles.heading}>
          프로필에 사용할 <br />
          사진을 선택해주세요.
        </h2>
      </div>
      <div>
        <div className={styles.avatarContainer}>
          <Image src="/user.svg" width={60} height={60} alt="avatar" />
        </div>
      </div>
      <div
        style={{
          marginTop: 40,
        }}
      >
        <Button variant="outline">
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
    </div>
  );
}
