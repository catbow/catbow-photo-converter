import { useRef } from 'react';
import { useVisibleModal } from '../../contexts/ContextWrapper';

export const useModal = () => {
  const visibleModalRef = useRef();
  const { setOnModal } = useVisibleModal();

  const clickOutSide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      setOnModal &&
      (visibleModalRef.current === e.currentTarget.parentElement ||
        visibleModalRef.current === e.target)
    ) {
      return;
    }

    if (
      setOnModal &&
      (visibleModalRef.current !== e.target ||
        visibleModalRef.current !== e.currentTarget.parentElement)
    ) {
      setOnModal(pre => !pre);
    }
  };

  return { clickOutSide, visibleModalRef };
};
