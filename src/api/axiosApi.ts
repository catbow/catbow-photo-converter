import axios from 'axios';

export const sendUrlToSeverAxios = (fileKey: string) => {
  const video = {
    video: fileKey,
  };
  const res = axios({
    method: 'post',
    url: `${process.env.REACT_APP_BASE_URL}/video/create`,
    data: video,
  });
  return res;
};

export const getZipFileToSeverAxios = (videoName: string, videoId: string) => {
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
