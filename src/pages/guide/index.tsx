import Image from 'next/image';
import { useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import Layout from '@/components/common/Layout';
import {
  Contact,
  Introduce,
  Nickname,
  Portfolio,
  Profile,
  PurPose,
  Sns,
} from '@/components/steps';
import { IFormValues } from '@/types/form';
import { useProfileStore } from '@/components/store/profileStore';

import * as styles from './guide.css';
import { NextPageWithLayout } from '../_app';

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
  const [nextDisabled, setNextDisabled] = useState(false);
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

  const { register, handleSubmit, setValue, watch } = useForm<IFormValues>();

  const addProfile = useProfileStore((state) => state.addProfile);
  const router = useRouter();

  const watchAllFields = watch();

  const onSubmit = (data: IFormValues) => {
    if (steps !== 'sns') return;
    if (data.instagram === undefined) return;
    addProfile(data);
    router.push('/');
  };

  useEffect(() => {
    if (watchAllFields) {
      if (steps === 'profile') {
        // profile is a FileList is empty
        setNextDisabled(watchAllFields[steps]?.length === 0);
        return;
      }

      if (steps === 'portfolio') {
        setNextDisabled(
          watchAllFields['portfolioLink'] === undefined ||
            watchAllFields['portfolioLink'] === '' ||
            watchAllFields['portfolioTitle'] === undefined ||
            watchAllFields['portfolioTitle'] === '',
        );
        return;
      }

      if (steps === 'contact') {
        setNextDisabled(
          watchAllFields['email'] === undefined ||
            watchAllFields['email'] === '' ||
            watchAllFields['phone'] === undefined ||
            watchAllFields['phone'] === '',
        );
        return;
      }

      if (steps === 'sns') {
        setNextDisabled(
          !watchAllFields['instagram'] &&
            !watchAllFields['youtube'] &&
            !watchAllFields['blog'] &&
            !watchAllFields['twitter'] &&
            !watchAllFields['facebook'],
        );

        return;
      }

      setNextDisabled(
        watchAllFields[steps] === undefined || watchAllFields[steps] === '',
      );
    }
  }, [watchAllFields, steps]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <nav className={styles.header}>
        <div className={styles.hover} onClick={prevStep}>
          <Image src="/arrow_left.svg" width={24} height={24} alt="back" />
        </div>
        <div className={styles.hover} onClick={() => router.push('/')}>
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
        {steps === 'profile' && <Profile register={register} watch={watch} />}
        {steps === 'nickname' && <Nickname register={register} />}
        {steps === 'introduce' && <Introduce register={register} />}
        {steps === 'portfolio' && <Portfolio register={register} />}
        {steps === 'contact' && <Contact register={register} />}
        {steps === 'sns' && <Sns register={register} />}
      </div>
      <div
        style={{
          marginTop: '44px',
        }}
      >
        <Button disabled={nextDisabled} onClick={nextStep}>
          다음
        </Button>
      </div>
    </form>
  );
};

Guide.getLayout = function getLayout(page) {
  return <Layout isHeader={false}>{page}</Layout>;
};

export default Guide;
