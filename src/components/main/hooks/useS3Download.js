import { v1 } from 'uuid';
import AWS from 'aws-sdk';
import { saveAs } from 'file-saver';
import { useLoading, useUploadFile } from '../../contexts/ContextWrapper';
import { sendUrlToSeverAxios } from '../../../Api/axiosApi';

export const useS3download = () => {
  const { fileList } = useUploadFile();
  const { setLoadingToogle } = useLoading();

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
        //TODO 콘솔 지우기
        console.log('업로드 되었습니다.');
        sendToServer(fileKey);
      } catch (err) {
        console.log(err);
      }
    });
  };

  const sendToServer = fileKey => {
    sendUrlToSeverAxios(fileKey).then(res => saveZipFile(res.data.img));
  };

  const saveZipFile = zipFile => {
    fetch(zipFile, { method: 'GET' })
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        saveAs(blob, 'catbow.zip');
      })
      .catch(err => {
        console.error('err: ', err);
      });
    setLoadingToogle(pre => !pre);
  };
  return { submitFile };
};
