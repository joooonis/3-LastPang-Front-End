import { useState } from 'react';

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface Props {
  defaultOpen: boolean;
}

const useModal = ({ defaultOpen }: Props): ModalState => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
