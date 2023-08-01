import * as styles from './steps.css';

export default function Contact() {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <p className={styles.caption}>연락처 입력</p>
        <h2 className={styles.heading}>
          연락처와 주소를 <br />
          입력해주세요.
        </h2>
      </div>
      <div></div>
    </div>
  );
}
