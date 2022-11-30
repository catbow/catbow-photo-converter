import React from 'react';
import { useUploadFile } from '../../../context/fileContext';
import { useModal } from './useModal';
import { useVisibleModal } from './contexts/modalContext';
import styled from 'styled-components';

const Modal = () => {
  const { clickOutSide, visibleModalRef, onModal, modalTitle } = useModal();
  const { setFileUrl, setButtonState } = useUploadFile();
  const { isUploadButton, setIsUploadButton } = useVisibleModal();

  const deleteFile = () => {
    setFileUrl('');
    setButtonState(pre => !pre);
  };

  const modalProps =
    onModal && isUploadButton === 'uploadButton'
      ? {
          onClick: console.log(111) && setIsUploadButton(''),
        }
      : {
          onClick: deleteFile && setIsUploadButton(''),
        };

  return (
    onModal && (
      <Background onClick={clickOutSide}>
        <Layout ref={visibleModalRef}>
          <Title>
            ❗️
            <br />
            <br />
            {isUploadButton === 'uploadButton'
              ? modalTitle.UPLOAD_TITLE
              : modalTitle.DELELTE_TITLE}
            <br />
          </Title>
          <ButtonContainer>
            <ButtonYes {...modalProps}>
              {isUploadButton === 'uploadButton' ? 'convert' : 'delete'}
            </ButtonYes>
            <ButtonNo> cancel </ButtonNo>
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

export const ButtonYes = styled.div`
  font-size: 17px;
  cursor: pointer;
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
