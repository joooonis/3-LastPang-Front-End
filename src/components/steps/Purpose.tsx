import * as styles from './steps.css';

export default function Purpose() {
  return (
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
  );
}
