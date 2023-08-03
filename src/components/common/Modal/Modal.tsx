import { theme } from '@/styles/theme.css';
import Button from '../Button';
import * as styles from './modal.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: Props) {
  return (
    isOpen && (
      <AnimatePresence>
        <div className={styles.modalOveray} />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={styles.modalContent}
        >
          <ModalContent />
        </motion.div>
      </AnimatePresence>
    )
  );
}

const ModalContent = () => {
  const router = useRouter();
  return (
    <div>
      <p>프로필 제작이 처음이라 막막하신가요?</p>
      <h1 className={styles.heading}>
        <span
          style={{
            color: theme.colors.primary.main,
          }}
        >
          위티
        </span>
        의 가이드에 따라 <br />
        만들어보는건 어떠세요?
      </h1>
      <div>
        <Button onClick={() => router.push('/guide')}>
          가이드에 따라 만들어볼래요
        </Button>
        <div className={styles.marginTop} />
        <Button variant="outline">스스로 만들어볼래요</Button>
      </div>
    </div>
  );
};
