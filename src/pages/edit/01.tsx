import Image from 'next/image';

import * as styles from './edit.css';

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
          <p className={styles.caption}>프로필 제작 목적</p>
          <h2 className={styles.heading}>
            프로필 링크를 <br />
            제작하는 이유가 궁금해요.
          </h2>
        </div>
        <div>
          <div className={styles.card}>
            <p>직무별, 회사별로 만들어 링크로 간단히 첨부할래요</p>
            <h2>포트폴리오</h2>
          </div>
          <div className={styles.card}>
            <p>직무별, 회사별로 만들어 링크로 간단히 첨부할래요</p>
            <h2>포트폴리오</h2>
          </div>
          <div className={styles.card}>
            <p>직무별, 회사별로 만들어 링크로 간단히 첨부할래요</p>
            <h2>포트폴리오</h2>
          </div>
          <div className={styles.card}>
            <p>직무별, 회사별로 만들어 링크로 간단히 첨부할래요</p>
            <h2>포트폴리오</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
