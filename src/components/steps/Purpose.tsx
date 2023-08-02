import { IFormProps } from '@/types/form';
import * as styles from './steps.css';

const CARDS = [
  {
    title: '포트폴리오',
    description: '직무별, 회사별로 만들어 링크로 간단히 첨부할래요',
  },
  {
    title: '개인 사업',
    description: '제 마켓을 인스타그램, 블로그 등에 첨부할거에요',
  },
  {
    title: '펫 프로필',
    description: '우리집 귀요미 사진 모음집을 만들거에요',
  },
  {
    title: '콘텐츠 홍보',
    description: '유튜브, 틱톡 등 저만의 콘텐츠 링크예요!',
  },
];

interface Props extends IFormProps {}

export default function Purpose({ setValue, watch }: Props) {
  const handleClick = (purpose: string) => {
    if (!setValue) return;
    setValue('purpose', purpose);
  };

  const purpose = watch && watch('purpose');

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
        {CARDS.map((card) => (
          <Card
            purpose={purpose}
            key={card.title}
            onClick={handleClick}
            {...card}
          />
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  purpose: string | undefined;
  description: string;
  onClick: (purpose: string) => void;
}

const Card = ({ title, purpose, description, onClick }: CardProps) => {
  return (
    <div
      className={purpose === title ? styles.purpose : styles.card}
      onClick={() => onClick(title)}
    >
      <p>{description}</p>
      <h2>{title}</h2>
    </div>
  );
};
