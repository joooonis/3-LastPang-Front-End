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

type Step =
  | 'purpose'
  | 'profile'
  | 'nickname'
  | 'introduce'
  | 'portfolio'
  | 'contact'
  | 'sns';

const Guide: NextPageWithLayout = () => {
  const [steps, setSteps] = useState<Step>('introduce');

  return (
    <div>
      <div>
        <div className={styles.progressText}>1/9</div>
        <div className={styles.progressBar} />
      </div>
      <div>
        {steps === 'purpose' && <PurPose />}
        {steps === 'profile' && <Profile />}
        {steps === 'nickname' && <Nickname />}
        {steps === 'introduce' && <Introduce />}
        {steps === 'portfolio' && <Portfolio />}
        {steps === 'contact' && <Contact />}
        {steps === 'sns' && <Sns />}
      </div>
    </div>
  );
};

Guide.getLayout = function getLayout(page) {
  return <Layout isHeader={false}>{page}</Layout>;
};

export default Guide;
