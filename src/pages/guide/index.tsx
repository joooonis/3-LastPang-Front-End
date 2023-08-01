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
  const [steps, setSteps] = useState<Step>('sns');

  return (
    <div>
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
