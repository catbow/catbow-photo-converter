/* eslint-disable no-useless-concat */
import { useRef } from 'react';
import { useVisibleModal } from '../../contexts/ContextWrapper';

export const useModal = () => {
  const visibleModalRef = useRef();
  const { setOnModal } = useVisibleModal();

  const clickOutSide = e => {
    if (
      setOnModal &&
      (visibleModalRef.current === e.target.parentElement ||
        visibleModalRef.current === e.target)
    ) {
      return;
    }

    if (
      setOnModal &&
      (visibleModalRef.current !== e.target ||
        visibleModalRef.current !== e.target.parentElement)
    ) {
      setOnModal(pre => !pre);
    }
  };

  return { clickOutSide, visibleModalRef };
};
