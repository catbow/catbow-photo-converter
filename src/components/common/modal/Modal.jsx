import React from 'react';
import axios from 'axios';
import { v1 } from 'uuid';
import AWS from 'aws-sdk';
import { saveAs } from 'file-saver';

import {
  useLoading,
  useUploadFile,
  useVisibleModal,
} from '../../contexts/ContextWrapper';
import { useModal } from './useModal';

import styled from 'styled-components';

export const modalTitle = {
  DELELTE_TITLE: 'Are you sure you want to delete it?',
  UPLOAD_TITLE: 'Are you sure you want to convert it?',
};

const Modal = () => {
  const { clickOutSide, visibleModalRef, onModal } = useModal();
  const { setFileUrl, setButtonState, fileList } = useUploadFile();
  const { isModalUploadButton, setIsModalUploadButton } = useVisibleModal();
  const { setLoadingToogle } = useLoading();

  const deleteFile = () => {
    setFileUrl('');
    setButtonState(pre => !pre);
  };

  const submitFile = () => {
    setLoadingToogle(pre => !pre);
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

    s3.putObject(uploadParams, (data, err) => {
      const fileKey = uploadParams.Key;
      try {
        console.log('업로드 되었습니다.');
        sendToServer(fileKey);
      } catch (err) {
        console.log(err);
      }
    });
  };

  const sendToServer = fileKey => {
    const video = {
      video: fileKey,
    };

    const { data } = axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/video/create`,
      data: video,
    });
    saveZipFile(data);
  };

  const saveZipFile = zipFile => {
    fetch(zipFile, { method: 'GET' })
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        saveAs(blob, 'myItem.extension');
      })
      .catch(err => {
        console.error('err: ', err);
      });
  };

  const modalProps =
    onModal && isModalUploadButton === 'uploadButton'
      ? {
          onClick: () => {
            submitFile();
            setIsModalUploadButton('');
            setButtonState(pre => !pre);
          },
        }
      : {
          onClick: () => {
            deleteFile();
            setIsModalUploadButton('');
          },
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
