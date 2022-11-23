import React from 'react';

import styled from 'styled-components';
import { useUploadFile } from '../../main/context/fileContext';
// import { useVisibleModal } from './contexts/modalContext';
import { useModal } from './useModal';

const Modal = () => {
  const { clickOutSide, visibleModalRef, deleteModal } = useModal();
  // const { deleteModal } = useVisibleModal();
  const { setFileUrl, setButtonState } = useUploadFile();

  const deleteFile = () => {
    setFileUrl('');
    setButtonState(pre => !pre);
  };
  return (
    deleteModal && (
      <div
        style={{
          width: '100%',
          height: '100%',
          // background: 'red',
          position: 'fixed',
        }}
        onClick={clickOutSide}
      >
        <Layout ref={visibleModalRef}>
          <Title>Are you sure you want to delete it?</Title>
          <ButtonContainer>
            <ButtonYes onClick={deleteFile}> delete </ButtonYes>
            <ButtonNo> cancel </ButtonNo>
          </ButtonContainer>
        </Layout>
      </div>
    )
  );
};

export default Modal;

export const Layout = styled.form`
  ${props => props.theme.variables.absoluteCenter}
  ${props => props.theme.variables.flex('column', 'space-evenly', 'center')}
  width : 300px;
  height: 200px;
  border: black 5px solid;
  padding: 10px;
  border-radius: 20px;
  z-index: 100;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 27px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('row', 'space-evenly', 'center')}
`;

export const ButtonYes = styled.button`
  font-size: 17px;
  &:hover {
    color: red;
  }
`;

export const ButtonNo = styled.div`
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;
