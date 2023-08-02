import Image from 'next/image';
import Input from '../common/Input';
import * as styles from './steps.css';
import { IFormProps } from '@/types/form';

interface Props extends IFormProps {}

export default function Sns({ register }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <div>
        <p className={styles.caption}>SNS 연동</p>
        <h2 className={styles.heading}>
          SNS를 프로필 링크에 <br />
          연동해줄게요.
        </h2>
      </div>
      <div>
        <div>
          <label className={styles.snsLabel} htmlFor="instagram">
            <Image
              src="/icons/instagram.svg"
              width={16}
              height={16}
              alt="portfolio"
            />
            <span>인스타그램</span>
          </label>
          <Input
            label="instagram"
            register={register}
            id="instagram"
            name="instagram"
            type="text"
            placeholder="@username"
          />
        </div>
        <div className={styles.marginTop}>
          <label className={styles.snsLabel} htmlFor="youtube">
            <Image
              src="/icons/youtube.svg"
              width={16}
              height={16}
              alt="youtube"
            />
            <span>유튜브</span>
          </label>
          <Input
            label="youtube"
            register={register}
            id="youtube"
            name="youtube"
            type="text"
            placeholder="https://youtube.com/channel/youtubeurl"
          />
        </div>
        <div className={styles.marginTop}>
          <label className={styles.snsLabel} htmlFor="blog">
            <Image
              src="/icons/instagram.svg"
              width={16}
              height={16}
              alt="instagram"
            />
            <span>블로그</span>
          </label>
          <Input
            label="blog"
            register={register}
            id="blog"
            name="blog"
            type="text"
            placeholder="https://blog.naver.com/blogpageurl"
          />
        </div>
        <div className={styles.marginTop}>
          <label className={styles.snsLabel} htmlFor="twitter">
            <Image
              src="/icons/twitter.svg"
              width={16}
              height={16}
              alt="twitter"
            />
            <span>트위터</span>
          </label>
          <Input
            label="twitter"
            register={register}
            id="twitter"
            name="twitter"
            type="text"
            placeholder="@userID"
          />
        </div>
        <div className={styles.marginTop}>
          <label className={styles.snsLabel} htmlFor="facebook">
            <Image
              src="/icons/facebook.svg"
              width={16}
              height={16}
              alt="facebook"
            />
            <span>페이스북</span>
          </label>
          <Input
            label="facebook"
            register={register}
            id="facebook"
            name="facebook"
            type="text"
            placeholder="https://facebook.com/facebookpageurl"
          />
        </div>
        <div
          style={{
            marginTop: 40,
          }}
        />
      </div>
    </div>
  );
}
