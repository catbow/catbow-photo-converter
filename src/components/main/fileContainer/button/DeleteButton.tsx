import { TiDeleteOutline } from 'react-icons/ti';
import {
  useUploadFile,
  useVisibleModal,
} from '../../../contexts/ContextWrapper';
import styled from 'styled-components';

const DeleteButton = () => {
  const { setOnModal, setIsModalUploadButton } = useVisibleModal();
  const { fileUrl } = useUploadFile();

  const onDeleteModal = () => {
    setIsModalUploadButton('deleteButton');
    setOnModal(pre => !pre);
  };

  if (fileUrl.length === 0) {
    return <div style={{ height: '30px' }} />;
  }
  return (
    <IconDisplay onClick={onDeleteModal}>
      <TiDeleteOutline size="30" />
    </IconDisplay>
  );
};

export default DeleteButton;

export const IconDisplay = styled.div`
  position: relative;
  margin-left: 80%;
  color: white;
`;
