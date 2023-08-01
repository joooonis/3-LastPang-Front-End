import * as styles from './steps.css';

export default function Sns() {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <p className={styles.caption}>SNS 연동</p>
        <h2 className={styles.heading}>
          SNS를 프로필 링크에 <br />
          연동해줄게요.
        </h2>
      </div>
      <div></div>
    </div>
  );
}
