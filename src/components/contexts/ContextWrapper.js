import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();
export const FileContext = createContext();
export const LoadingContext = createContext();

export const ContextWrapper = ({ children }) => {
  const [fileUrl, setFileUrl] = useState('');
  const [buttonState, setButtonState] = useState(true);
  const [fileList, setFileList] = useState([]);

  const [onModal, setOnModal] = useState(false);
  const [isModalUploadButton, setIsModalUploadButton] = useState('');
  const [loadingToogle, setLoadingToogle] = useState(false);

  return (
    <FileContext.Provider
      value={{
        fileUrl,
        setFileUrl,
        buttonState,
        setButtonState,
        fileList,
        setFileList,
      }}
    >
      <ModalContext.Provider
        value={{
          onModal,
          setOnModal,
          isModalUploadButton,
          setIsModalUploadButton,
        }}
      >
        <LoadingContext.Provider value={{ loadingToogle, setLoadingToogle }}>
          {children}
        </LoadingContext.Provider>
      </ModalContext.Provider>
    </FileContext.Provider>
  );
};

export const useVisibleModal = () => useContext(ModalContext);
export const useUploadFile = () => useContext(FileContext);
export const useLoading = () => useContext(LoadingContext);
