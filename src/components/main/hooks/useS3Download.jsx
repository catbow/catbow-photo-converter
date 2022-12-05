import { v1 } from 'uuid';
import AWS from 'aws-sdk';
import { saveAs } from 'file-saver';
import { useLoading, useUploadFile } from '../../contexts/ContextWrapper';
import {
  sendUrlToSeverAxios,
  getZipFileToSeverAxios,
} from '../../../Api/axiosApi';

const useS3download = () => {
  const { fileList } = useUploadFile();
  const { mode, setMode } = useLoading();

  const submitFile = () => {
    setMode('loading');
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
        sendToServer(fileKey);
      } catch (err) {
        setMode('error');
        console.error(`S3 putObject ${err}`);
      }
    });
  };

  const sendToServer = fileKey => {
    sendUrlToSeverAxios(fileKey)
      .then(res =>
        //TODO 광고
        getZipFileToSever(res.data.videoName, res.data.videoId)
      )
      .catch(err => {
        setMode('error');
        console.error(err);
      });
  };

  const getZipFileToSever = (videoName, videoId) => {
    getZipFileToSeverAxios(videoName, videoId)
      .then(res => saveZipFile(res.data.img))
      .catch(err => {
        setMode('error');
        console.error(err);
      });
  };

  const saveZipFile = zipFile => {
    fetch(zipFile, { method: 'GET' })
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        saveAs(blob, 'catbow.zip');
        setMode('show');
      })
      .catch(err => {
        if (mode !== 'error') {
          setMode('error');
        }
        console.error('err: ', err);
      });
  };

  return { submitFile };
};
export default useS3download;
