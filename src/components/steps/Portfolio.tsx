import Input from '@/components/common/Input';
import * as styles from './steps.css';

export default function Portfolio() {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <p className={styles.caption}>링크 삽입</p>
        <h2 className={styles.heading}>
          포트폴리오 링크를 <br />
          입력해주세요.
        </h2>
      </div>
      <div>
        <Input type="text" placeholder="한줄로 나를 표현하기." />
      </div>
    </div>
  );
}
