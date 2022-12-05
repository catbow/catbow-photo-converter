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
      setFileList(e.target.files);
      setFileUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  return {
    handleFile,
  };
};
