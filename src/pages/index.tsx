import Layout from '@/components/common/Layout';
import { useProfileStore } from '@/components/store/profileStore';

import * as styles from '@/components/steps/steps.css';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const currentProfile = useProfileStore((state) => state.currentProfile);
  return (
    <>
      <main>
        {currentProfile && (
          <div className={styles.cardWrapper} key={currentProfile.nickname}>
            {currentProfile.nickname}
          </div>
        )}
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
