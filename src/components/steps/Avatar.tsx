import * as styles from './steps.css';

export default function Avatar() {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <p className={styles.caption}>프로필 사진 선택</p>
        <h2 className={styles.heading}>
          프로필에 사용할 <br />
          사진을 선택해주세요.
        </h2>
      </div>
      <div>프로필 사진 선택 스텝입니다.</div>
    </div>
  );
}
