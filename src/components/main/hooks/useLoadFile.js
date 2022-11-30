import axios from 'axios';
import { useState } from 'react';
import { v1 } from 'uuid';
import AWS from 'aws-sdk';
import { useUploadFile } from '../../../context/fileContext';
import { useVisibleModal } from '../../common/modal/contexts/modalContext';

export const useLoadFile = () => {
  const { fileUrl, setFileUrl } = useUploadFile();
  const { buttonState, setButtonState } = useUploadFile();
  const { setOnModal, setIsUploadButton } = useVisibleModal();
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
            setOnModal(pre => !pre);
            setIsUploadButton(e.target.name);
            // submitFile(e);
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
  return { buttonState, buttonStateProps };
};
