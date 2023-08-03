import Layout from '@/components/common/Layout';
import { useProfileStore } from '@/components/store/profileStore';

import { NextPageWithLayout } from './_app';
import useModal from '@/hooks/useModal';
import Modal from '@/components/common/Modal/Modal';
import Image from 'next/image';

const Home: NextPageWithLayout = () => {
  const { isOpen, closeModal, openModal } = useModal({
    defaultOpen: true,
  });
  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Image
          fill
          style={{
            objectFit: 'contain',
            transform: 'translateY(-8%)',
          }}
          src="/home.png"
          alt="home"
        />
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout isHeader={false}>{page}</Layout>;
};

export default Home;
