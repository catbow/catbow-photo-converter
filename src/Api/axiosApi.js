import axios from 'axios';

export const sendUrlToSeverAxios = fileKey => {
  const video = {
    video: fileKey,
  };
  const res = axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/video/create`,
    headers: { referrerPolicy: 'unsafe_url' },
    data: video,
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
    url: `${process.env.REACT_APP_BASE_URL}/video/download`,
    data: datas,
  });

  return res;
};
