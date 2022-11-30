/* eslint-disable no-useless-concat */
import { useRef } from 'react';
import { useVisibleModal } from '../../contexts/ContextWrapper';

export const useModal = () => {
  const visibleModalRef = useRef();
  const { onModal, setOnModal } = useVisibleModal();

  const clickOutSide = e => {
    console.log('ref', visibleModalRef.current);
    console.log('parent', e.target.parentElement);
    console.log('e.target', e.target);

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

  return { onModal, clickOutSide, visibleModalRef };
};
