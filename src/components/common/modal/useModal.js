import { useRef } from 'react';
import { useVisibleModal } from './contexts/modalContext';

export const useModal = () => {
  //   const [modalOn, setModalOn] = useState(false);
  const visibleModalRef = useRef();
  const { deleteModal, setDeleteModal } = useVisibleModal();

  const clickOutSide = e => {
    console.log(e.target);
    console.log(visibleModalRef.current);
    if (setDeleteModal && visibleModalRef.current !== e.target) {
      setDeleteModal(pre => !pre);
    }
    console.log(visibleModalRef.current);
  };
  return { deleteModal, clickOutSide, visibleModalRef };
};
