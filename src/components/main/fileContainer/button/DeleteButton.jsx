import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
// import { useUploadFile } from '../../context/fileContext';
import styled from 'styled-components';
import { useVisibleModal } from '../../../common/modal/contexts/modalContext';

const DeleteButton = () => {
  // const { setFileUrl } = useUploadFile();
  // const { setButtonState } = useUploadFile();
  const { setDeleteModal, deleteModal } = useVisibleModal();

  // const deleteFile = () => {
  //   setFileUrl('');
  //   setButtonState(pre => !pre);
  // };

  const modal = () => {
    console.log(111);
    setDeleteModal(pre => !pre);
    console.log(deleteModal);
  };

  return (
    <IconDisplay onClick={modal}>
      <TiDeleteOutline size="30" />
    </IconDisplay>
  );
};

export default DeleteButton;

export const IconDisplay = styled.div`
  positon: absolute;
  margin-left: 70%;
  color: white;
`;
