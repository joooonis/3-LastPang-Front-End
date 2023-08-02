import Head from 'next/head';

import Layout from '@/components/common/Layout';
import { useProfileStore } from '@/components/features/profileStore';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const profiles = useProfileStore((state) => state.profiles);
  return (
    <>
      <main>
        {profiles.map((profile) => (
          <div key={profile.introduce}>
            <h1>{profile.nickname}</h1>
            <h2>{profile.introduce}</h2>
            <h3>{profile.purpose}</h3>
            <h4>{profile.email}</h4>
            <h5>{profile.phone}</h5>
          </div>
        ))}
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
