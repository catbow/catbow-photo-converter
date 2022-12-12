import axios from 'axios';
import https from 'https';

export const sendUrlToSeverAxios = fileKey => {
  const video = {
    video: fileKey,
  };
  const res = axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/video/create`,
    data: video,
    httpsAgent: new https.Agent({ keepAlive: true }),
  });
  return res;
};

export const getZipFileToSeverAxios = (videoName, videoId) => {
  const datas = {
    videoName: videoName,
    videoId: videoId,
  };

  const res = axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}
    /video/download`,
    data: datas,
  });

  return res;
};
