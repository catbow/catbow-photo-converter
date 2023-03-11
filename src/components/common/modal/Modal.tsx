import { useEffect } from 'react';
import styled from 'styled-components';
import { KeyEventTargetProps } from 'utils/types';

import useS3download from '../../main/hooks/useS3Download';

import { useUploadFile, useVisibleModal } from '../../contexts/ContextWrapper';
import { useModal } from './useModal';

export const modalTitle = {
  DELELTE_TITLE: 'Are you sure you want to delete it?',
  UPLOAD_TITLE: 'Are you sure you want to convert it?',
};

const Modal = () => {
  const { submitFile } = useS3download();
  const { clickOutSide, visibleModalRef } = useModal();
  const { setFileUrl, setButtonState } = useUploadFile();
  const {
    onModal,
    setOnModal,
    isModalUploadButton,
    keyEventTarget,
    setKeyEventTarget,
    setIsModalUploadButton,
  } = useVisibleModal();

  const modalProps =
    onModal && isModalUploadButton === 'uploadButton'
      ? {
          /** convert 모달 yes 버튼  */
          onClick: () => {
            submitFile();
            setFileUrl('');
            setButtonState(pre => !pre);
          },
        }
      : {
          onClick: () => {
            /** delete 모달 yes 버튼 */
            setFileUrl('');
            setButtonState(pre => !pre);
          },
        };

  const handleCancel = (e: { stopPropagation: () => void }) => {
    /** 모달 관계 없이 취소 버튼 누를 때  */
    e.stopPropagation();
    setOnModal(pre => !pre);
  };

  useEffect(() => {
    /** 키이벤트 */
    const keyEvent = (e: { preventDefault: () => void; key: string }) => {
      if (e.key === 'Enter' && isModalUploadButton === 'uploadButton') {
        if (keyEventTarget === 'left') {
          e.preventDefault();
          setOnModal(prev => !prev);
          submitFile();
          setFileUrl('');
          setButtonState(prev => !prev);
        }
        if (keyEventTarget === 'right') {
          setKeyEventTarget('left');
        }
      }

      if (e.key === 'Enter' && isModalUploadButton === 'deleteButton') {
        if (keyEventTarget === 'left') {
          e.preventDefault();
          setFileUrl('');
          setOnModal(pre => !pre);
          setButtonState(prev => !prev);
        }
        if (keyEventTarget === 'right') {
          setKeyEventTarget('left');
          setOnModal(pre => !pre);
        }
      }
      if (e.key === 'ArrowLeft') {
        setKeyEventTarget('left');
      }
      if (e.key === 'ArrowRight') {
        setKeyEventTarget('right');
      }
    };
    if (onModal) {
      window.addEventListener('keydown', keyEvent);
    }
    return () => window.removeEventListener('keydown', keyEvent);
  }, [
    isModalUploadButton,
    keyEventTarget,
    onModal,
    setButtonState,
    setFileUrl,
    setIsModalUploadButton,
    setKeyEventTarget,
    setOnModal,
    submitFile,
  ]);

  if (!onModal) {
    return;
  }

  return (
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
          <ButtonYes {...modalProps} keyEventTarget={keyEventTarget}>
            {isModalUploadButton === 'uploadButton' ? 'convert' : 'delete'}
          </ButtonYes>
          <ButtonNo onClick={handleCancel} keyEventTarget={keyEventTarget}>
            cancel
          </ButtonNo>
        </ButtonContainer>
      </Layout>
    </Background>
  );
};

export default Modal;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 30;
`;

export const Layout = styled.div`
  ${({ theme }) => theme.variables.absoluteCenter}
  ${({ theme }) => theme.variables.flex('column', 'space-evenly', 'center')}
  width : 300px;
  height: 200px;
  border: #333333 1px solid;
  background: ${({ theme }) => theme.colors.mainColor};
  padding: 15px;
  border-radius: 20px;
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

export const ButtonYes = styled.button<KeyEventTargetProps>`
  color: ${({ keyEventTarget }) => (keyEventTarget === 'left' ? 'red' : '')};
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const ButtonNo = styled.button<KeyEventTargetProps>`
  color: ${({ keyEventTarget }) => (keyEventTarget === 'right' ? 'red' : '')};
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;
