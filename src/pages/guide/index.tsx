import Layout from '@/components/common/Layout';
import * as styles from './guide.css';
import { NextPageWithLayout } from '../_app';
import { Avatar, Nickname, PurPose } from '@/components/steps';
import { useState } from 'react';

type Step = 'avatar' | 'nickname' | 'purpose';

const Guide: NextPageWithLayout = () => {
  const [steps, setSteps] = useState<Step>('purpose');

  return (
    <div>
      <div>
        <div className={styles.progressText}>1/9</div>
        <div className={styles.progressBar} />
      </div>
      <div>
        {steps === 'avatar' && <Avatar />}
        {steps === 'nickname' && <Nickname />}
        {steps === 'purpose' && <PurPose />}
      </div>
    </div>
  );
};

Guide.getLayout = function getLayout(page) {
  return <Layout isHeader={false}>{page}</Layout>;
};

export default Guide;
