/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
// import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { useVisibleModal } from '../../../contexts/ContextWrapper';
import { useLoadFile } from '../../hooks/useLoadFile';

const UploadButton = () => {
  const { buttonState, handleFile, fileUrl, setButtonState } = useLoadFile();
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
          onClick: e => {
            setOnModal(pre => !pre);
            setIsModalUploadButton(e.target.name);
          },
        };

  return (
    <FileUpLoadButton>
      <FileButton>
        <div>{buttonState ? '   UPLOAD' : 'CONVERT'}</div>
        <FileUpLoad {...buttonStateProps} name="uploadButton" />
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
`;
