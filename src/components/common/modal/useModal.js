/* eslint-disable no-useless-concat */
import { useRef } from 'react';
import { useVisibleModal } from './contexts/modalContext';

export const modalTitle = {
  DELELTE_TITLE: 'Are you sure you want to delete it?',
  UPLOAD_TITLE: 'Are you sure you want to convert it?',
};

export const useModal = () => {
  const visibleModalRef = useRef();
  const { onModal, setOnModal } = useVisibleModal();

  const clickOutSide = e => {
    if (
      setOnModal &&
      (visibleModalRef.current === e.target.parentElement ||
        visibleModalRef.current === e.target)
    ) {
      return;
    }

    if (setOnModal && visibleModalRef.current !== e.target) {
      setOnModal(pre => !pre);
    }
  };

  return { onModal, clickOutSide, visibleModalRef, modalTitle };
};
