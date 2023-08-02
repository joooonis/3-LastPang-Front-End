import Input from '@/components/common/Input';
import * as styles from './steps.css';
import Image from 'next/image';
import Button from '../common/Button';
import { IFormProps } from '@/types/form';

interface Props extends IFormProps {}

export default function Portfolio({ register }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <p className={styles.caption}>링크 삽입</p>
        <h2 className={styles.heading}>
          포트폴리오 링크를 <br />
          입력해주세요.
        </h2>
      </div>
      <div className={styles.flex}>
        <label htmlFor="portfolio" className={styles.label}>
          <Image
            src="/icons/image.svg"
            width={20}
            height={24}
            alt="portfolio"
          />
        </label>
        <Input
          label="portfolioTitle"
          register={register}
          id="portfolio"
          name="portfolio"
          type="text"
          placeholder="링크 제목을 입력해주세요."
        />
      </div>
      <div
        style={{
          width: `100%`,
          height: 8,
        }}
      />
      <div className={styles.flex}>
        <Input
          label="PortfolioLink"
          register={register}
          type="text"
          placeholder="http://example.com"
        />
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
            src="/icons/plus.svg"
            width={24}
            height={24}
            alt="upload"
          />
          링크 추가하기
        </Button>
      </div>
    </div>
  );
}
