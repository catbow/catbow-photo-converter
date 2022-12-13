import React from 'react';
import styled from 'styled-components';
import {
  useUploadFile,
  useVisibleModal,
} from '../../../contexts/ContextWrapper';
import { useLoadFile } from '../../hooks/useLoadFile';

const UploadButton = () => {
  const { handleFile } = useLoadFile();
  const { fileUrl, buttonState, setButtonState } = useUploadFile();
  const { setOnModal, setIsModalUploadButton } = useVisibleModal();

  const buttonStateProps =
    buttonState && fileUrl.length === 0
      ? {
          type: 'file',
          onChange: e => {
            handleFile(e);
            setButtonState(pre => !pre);
          },
        }
      : {
          type: 'button',
          onClick: () => {
            fileUrl.length !== 0 && setOnModal(pre => !pre);
            setIsModalUploadButton('uploadButton');
          },
        };

  return (
    <FileUpLoadButton>
      <FileButton>
        <div style={{ paddingTop: '8px' }}>
          {buttonState ? 'UPLOAD' : 'CONVERT'}
        </div>
        <FileUpLoad
          {...buttonStateProps}
          // disabled={ableToConvert}
        />
      </FileButton>
    </FileUpLoadButton>
  );
};

export default UploadButton;

export const FileUpLoad = styled.input`
  opacity: 0;
`;

export const FileButton = styled.label`
  ${props => props.theme.variables.flex()};
  width: 95px;
  height: 30px;
  background: black;
  border-radius: 9.5px;
  cursor: pointer;
  padding-left: 15px;
  display: inline;
`;

export const FileUpLoadButton = styled.form`
  ${props => props.theme.variables.rainBowColor};
  ${props => props.theme.variables.flex()};
  width: 100px;
  height: 35px;
  font-weight: 900;
  border-radius: 10px;
  margin-top: 50px;
  cursor: pointer;
  // opacity: ${({ ableToConvert }) => (!ableToConvert ? '' : '0.7')}
`;
