import { v1 } from 'uuid';
import AWS from 'aws-sdk';
import { saveAs } from 'file-saver';
import { useLoading, useUploadFile } from '../../contexts/ContextWrapper';
import {
  sendUrlToSeverAxios,
  getZipFileToSeverAxios,
} from '../../../api/axiosApi';

const useS3download = () => {
  const { fileList } = useUploadFile();
  const { mode, setMode } = useLoading();

  /**
   * S3 상위 함수
   *S3 정보를 담음
   */

  const submitFile = () => {
    setMode('loading');
    const s3 = new AWS.S3({
      accessKeyId: process.env.REACT_APP_ACCESS,
      secretAccessKey: process.env.REACT_APP_SECRET,
      region: process.env.REACT_APP_REGION,
    });

    /**S3 파일 정보 담는 함수, 보통 key 값으로 파일명을 쓰지만 여러 사용자가 쓸 경우 파일명이 겹칠 수 있기 때문에 UUID 를 사용*/

    const uploadParams = {
      Bucket: process.env.REACT_APP_BUCKET_NAME,
      Body: fileList[0],
      Key: `image/${v1().toString().replace('-', '')}.${
        fileList[0].type.split('/')[1]
      }`,
      ContentType: fileList[0].type,
    };

    /** S3 올리는 로직, aws-sdk 라이브러리, putObject 메서드 사용함.
     * 서버에 동영상 올린 URL를 주기 위해 파일키를 fileKey 변수에 담음
     * (URL 주소는 버킷명, 폴더, 파일명으로 이루어져있기 때문에 파일명만 알아도 서버에서 접근 가능) */

    s3.putObject(uploadParams, (data, err) => {
      const fileKey = uploadParams.Key;
      try {
        sendToServer(fileKey);
      } catch (err) {
        setMode('error');
        console.error(`S3 putObject ${err}`);
      }
    });
    return;
  };
  /** 서버로 fileKey 보내는 함수, response로 videoName과 videoId를 받음 */

  const sendToServer = (fileKey: string) => {
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

  /** 서버로 videoName과 videoId를 보내는 함수, 이를 통해서 해당 zip파일 받습니다 */

  const getZipFileToSever = (videoName: string, videoId: string) => {
    getZipFileToSeverAxios(videoName, videoId)
      .then(res => saveZipFile(res.data.img))
      .catch(err => {
        setMode('error');
        console.error(err);
      });
  };

  /** 해당 zip파일 받아서 자동 다운로드하는 함수 */

  const saveZipFile = (zipFile: RequestInfo | URL) => {
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
