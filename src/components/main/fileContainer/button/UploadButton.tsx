import styled from 'styled-components';
import { ButtonStateProps } from 'utils/types';

import {
  useUploadFile,
  useVisibleModal,
} from '../../../contexts/ContextWrapper';
import { useLoadFile } from '../../hooks/useLoadFile';

const UploadButton = () => {
  const { handleFile } = useLoadFile();
  const { buttonState, setButtonState, fileList, fileUrl } = useUploadFile();
  const { setOnModal, setIsModalUploadButton } = useVisibleModal();

  const buttonStateProps: ButtonStateProps =
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
          disabled: !(fileList[0]?.size < 20971520 && fileList !== null),
          onClick: e => {
            e.preventDefault();
            fileUrl.length !== 0 && setOnModal(pre => !pre);
            setIsModalUploadButton('uploadButton');
          },
        };

  return (
    <FileUpLoadButton>
      <FileButton>
        <FileState>{buttonState ? 'UPLOAD' : 'CONVERT'}</FileState>
        <FileUpLoad {...buttonStateProps} />
      </FileButton>
    </FileUpLoadButton>
  );
};

export default UploadButton;

export const FileUpLoad = styled.input`
  opacity: 0;
`;

const FileState = styled.div`
  height: 100%;
  ${({ theme }) => theme.variables.flex()};
`;

export const FileButton = styled.label`
  width: 93%;
  height: 80%;
  background: black;
  border-radius: 9px;
  cursor: pointer;
`;

export const FileUpLoadButton = styled.form`
  ${({ theme }) => theme.variables.rainBowColor};
  ${({ theme }) => theme.variables.flex()};
  margin: 20px;
  width: 100px;
  height: 40px;
  font-weight: 800;
  border-radius: 10px;
  cursor: pointer;
`;
