import Layout from '@/components/common/Layout';
import { useProfileStore } from '@/components/store/profileStore';

import { NextPageWithLayout } from './_app';
import useModal from '@/hooks/useModal';
import Modal from '@/components/common/Modal/Modal';

const Home: NextPageWithLayout = () => {
  const { isOpen, closeModal, openModal } = useModal({
    defaultOpen: true,
  });
  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal} />
      <main></main>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
