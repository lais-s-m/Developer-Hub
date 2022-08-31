import { BaseSyntheticEvent, ReactNode } from 'react';

import { ModalContainer, ModalContent, ModalHeader } from './styles';

interface IModal {
  modalTitle: string;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

export const Modal = ({ modalTitle, setIsVisible, children }: IModal) => {
  const handleCloseModal = (event: BaseSyntheticEvent) => {
    if (event.target.id === 'modal-container') {
      setIsVisible(false);
    }
  };

  return (
    <ModalContainer id='modal-container' onClick={handleCloseModal}>
      <ModalContent>
        <ModalHeader>
          <h3>{modalTitle}</h3>
          <button type='button' onClick={() => setIsVisible(false)}>
            x
          </button>
        </ModalHeader>
        <section>{children}</section>
      </ModalContent>
    </ModalContainer>
  );
};
