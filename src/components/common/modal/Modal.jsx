import React from 'react';
import { useUploadFile, useVisibleModal } from '../../contexts/ContextWrapper';
import { useModal } from './useModal';
import styled from 'styled-components';
import { useS3download } from '../../main/hooks/useS3download';

export const modalTitle = {
  DELELTE_TITLE: 'Are you sure you want to delete it?',
  UPLOAD_TITLE: 'Are you sure you want to convert it?',
};

const Modal = () => {
  const { submitFile } = useS3download();
  const { clickOutSide, visibleModalRef, onModal } = useModal();
  const { setFileUrl, setButtonState } = useUploadFile();
  const { isModalUploadButton, setIsModalUploadButton, setOnModal } =
    useVisibleModal();

  const modalProps =
    onModal && isModalUploadButton === 'uploadButton'
      ? {
          onClick: () => {
            submitFile();
            setIsModalUploadButton('');
            setButtonState(pre => !pre);
            setFileUrl('');
          },
        }
      : {
          onClick: () => {
            deleteFile();
            setIsModalUploadButton('');
          },
        };

  const handleCancel = e => {
    e.stopPropagation();
    setOnModal(pre => !pre);
  };

  const deleteFile = () => {
    setFileUrl('');
    setButtonState(pre => !pre);
  };

  return (
    onModal && (
      <Background onClick={clickOutSide}>
        <Layout ref={visibleModalRef}>
          <Title>
            ❗️
            <br />
            <br />
            {isModalUploadButton === 'uploadButton'
              ? modalTitle.UPLOAD_TITLE
              : modalTitle.DELELTE_TITLE}
            <br />
          </Title>
          <ButtonContainer>
            <ButtonYes {...modalProps}>
              {isModalUploadButton === 'uploadButton' ? 'convert' : 'delete'}
            </ButtonYes>
            <ButtonNo onClick={handleCancel}> cancel </ButtonNo>
          </ButtonContainer>
        </Layout>
      </Background>
    )
  );
};

export default Modal;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const Layout = styled.div`
  ${props => props.theme.variables.absoluteCenter}
  ${props => props.theme.variables.flex('column', 'space-evenly', 'center')}
  width : 300px;
  height: 200px;
  border: #333333 1px solid;
  background: ${props => props.theme.style.mainColor};
  padding: 15px;
  border-radius: 20px;
  z-index: 100;
  box-shadow: 2px 2px 5px 2px #333333;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 23px;
  cursor: Default;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('row', 'space-evenly', 'center')}
`;

export const ButtonYes = styled.button`
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const ButtonNo = styled.button`
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;
