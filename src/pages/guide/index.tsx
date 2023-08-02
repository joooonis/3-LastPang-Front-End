import Layout from '@/components/common/Layout';
import * as styles from './guide.css';
import { NextPageWithLayout } from '../_app';
import {
  Profile,
  Nickname,
  PurPose,
  Portfolio,
  Contact,
  Sns,
  Introduce,
} from '@/components/steps';
import { useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import Button from '@/components/common/Button';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { IFormValues } from '@/types/form';

const STEPS = [
  'purpose',
  'profile',
  'nickname',
  'introduce',
  'portfolio',
  'contact',
  'sns',
] as const;

type Step =
  | 'purpose'
  | 'profile'
  | 'nickname'
  | 'introduce'
  | 'portfolio'
  | 'contact'
  | 'sns';

const Guide: NextPageWithLayout = () => {
  const [steps, setSteps] = useState<Step>('purpose');
  const nextStep = () => {
    const index = STEPS.indexOf(steps);
    if (index === STEPS.length - 1) return;
    setSteps(STEPS[index + 1]);
  };
  const prevStep = () => {
    const index = STEPS.indexOf(steps);
    if (index === 0) return;
    setSteps(STEPS[index - 1]);
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormValues>();

  console.log('watch', watch());
  const onSubmit = (data: IFormValues) => console.log(data);

  return (
    <div onSubmit={handleSubmit(onSubmit)}>
      <nav className={styles.header}>
        <div className={styles.hover} onClick={prevStep}>
          <Image src="/arrow_left.svg" width={24} height={24} alt="back" />
        </div>
        <div className={styles.hover}>
          <Image src="/wity_main_logo.svg" width={58} height={24} alt="logo" />
        </div>
        <div
          style={{
            width: '24px',
            height: '24px',
          }}
        />
      </nav>
      <div>
        <div className={styles.progressText}>
          {STEPS.indexOf(steps) + 1 + '/' + 7}
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={assignInlineVars({
              [styles.progressStep]:
                ((STEPS.indexOf(steps) + 1) / STEPS.length) * 100 + '%',
            })}
          />
        </div>
      </div>
      <div>
        {steps === 'purpose' && (
          <PurPose register={register} setValue={setValue} watch={watch} />
        )}
        {steps === 'profile' && <Profile />}
        {steps === 'nickname' && <Nickname register={register} />}
        {steps === 'introduce' && <Introduce register={register} />}
        {steps === 'portfolio' && <Portfolio />}
        {steps === 'contact' && <Contact />}
        {steps === 'sns' && <Sns />}
      </div>
      <div
        style={{
          marginTop: '44px',
        }}
      >
        <Button onClick={nextStep}>다음</Button>
      </div>
    </div>
  );
};

Guide.getLayout = function getLayout(page) {
  return <Layout isHeader={false}>{page}</Layout>;
};

export default Guide;
