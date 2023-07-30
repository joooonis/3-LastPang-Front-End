import Image from 'next/image';

import * as styles from './edit.css';
import Input from '@/components/common/Input/Input';

export default function Edit() {
  return (
    <div>
      <header>
        <Image src="/wity-icon.svg" alt="Vercel Logo" width={58} height={24} />
      </header>
      <div>
        <div className={styles.progressText}>1/9</div>
        <div className={styles.progressBar} />
      </div>
      <div className={styles.cardWrapper}>
        <div>
          <p className={styles.caption}>닉네임 입력</p>
          <h2 className={styles.heading}>
            프로필에 사용할 <br />
            닉네임을 입력해주세요.
          </h2>
          <Input type="text" placeholder="닉네임을 입력해주세요." />
        </div>
      </div>
    </div>
  );
}
