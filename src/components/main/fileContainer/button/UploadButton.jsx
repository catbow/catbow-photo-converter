/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
// import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useUploadFile } from '../../context/fileContext';
import AWS from 'aws-sdk';
import { v1 } from 'uuid';
import axios from 'axios';

const UploadButton = () => {
  const { fileUrl, setFileUrl } = useUploadFile();
  const { buttonState, setButtonState } = useUploadFile();
  const [fileList, setFileList] = useState([]);

  const handleFile = e => {
    const passed = e.target.files[0]?.type === 'video/mp4';

    if (!e.target.files) {
      return alert('파일이 업로드 되지 않았습니다');
    }
    if (!passed) {
      setButtonState(pre => !pre);
      return alert('mp4 형식만 가능합니다');
    }
    if (passed) {
      setFileList(e.target.files);
      setFileUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

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
            submitFile(e);
            setButtonState(pre => !pre);
          },
        };

  const submitFile = async e => {
    e.preventDefault();

    const s3 = new AWS.S3({
      accessKeyId: process.env.REACT_APP_ACCESS,
      secretAccessKey: process.env.REACT_APP_SECRET,
      region: process.env.REACT_APP_REGION,
    });

    const uploadParams = {
      Bucket: process.env.REACT_APP_BUCKET_NAME,
      Body: fileList[0],
      Key: `image/${v1().toString().replace('-', '')}.${
        fileList[0].type.split('/')[1]
      }`,
      ContentType: fileList[0].type,
    };

    await s3.putObject(uploadParams, (data, err) => {
      const fileKey = uploadParams.Key;
      try {
        alert('업로드 되었습니다.');
        sendToServer(fileKey);
      } catch (err) {
        console.log(err);
      }
    });
  };

  const sendToServer = async fileKey => {
    const video = {
      video: fileKey,
    };

    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/video/create`,
      data: video,
    });
  };

  return (
    <FileUpLoadButton>
      <FileButton>
        <div>{buttonState ? '  UPLOAD' : 'CONVERT'}</div>
        <FileUpLoad {...buttonStateProps} />
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
