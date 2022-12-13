import { useUploadFile } from '../../contexts/ContextWrapper';

export const useLoadFile = () => {
  const { setFileUrl, setButtonState, setFileList } = useUploadFile();

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
      let videoElement = document.createElement('video');
      videoElement.src = URL.createObjectURL(e.target.files[0]);
      const timer = setTimeout(() => {
        if (videoElement.readyState === 4) {
          if (videoElement.duration > 30) {
            alert('Videos must not be longer than 30 seconds 😥');
            window.location.reload();
            setFileList('');
            setFileUrl('');
            setButtonState(pre => !pre);
          }
          clearTimeout(timer);
        }
      }, 500);

      setFileList(e.target.files);
      setFileUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  return {
    handleFile,
  };
};
