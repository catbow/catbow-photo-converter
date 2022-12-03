import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { useVisibleModal } from '../../../contexts/ContextWrapper';
import styled from 'styled-components';

const DeleteButton = () => {
  const { setOnModal, setIsModalUploadButton } = useVisibleModal();

  const onDeleteModal = () => {
    setIsModalUploadButton('');
    setOnModal(pre => !pre);
  };

  return (
    <IconDisplay onClick={onDeleteModal}>
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
