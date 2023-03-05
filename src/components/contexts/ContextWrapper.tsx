import { createContext, useContext, useState } from 'react';
import {
  FileContextProps,
  LoadingContextProps,
  ModalContextProps,
} from 'utils/types';

export const FileContext = createContext<FileContextProps>(null);
export const ModalContext = createContext<ModalContextProps>(null);
export const LoadingContext = createContext<LoadingContextProps>(null);

export const ContextWrapper = ({ children }: { children: JSX.Element }) => {
  const [fileUrl, setFileUrl] = useState<string>('');
  const [buttonState, setButtonState] = useState<boolean>(true);
  const [fileList, setFileList] = useState<File>(null);

  const [onModal, setOnModal] = useState<boolean>(false);
  const [isModalUploadButton, setIsModalUploadButton] =
    useState<string>('deleteButton');
  const [keyEventTarget, setKeyEventTarget] = useState<string>('left');

  const [loadingToogle, setLoadingToogle] = useState<boolean>(false);

  const [mode, setMode] = useState<string>('show');

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
          keyEventTarget,
          setKeyEventTarget,
        }}
      >
        <LoadingContext.Provider
          value={{
            loadingToogle,
            setLoadingToogle,
            mode,
            setMode,
          }}
        >
          {children}
        </LoadingContext.Provider>
      </ModalContext.Provider>
    </FileContext.Provider>
  );
};

export const useVisibleModal = () => useContext(ModalContext);
export const useUploadFile = () => useContext(FileContext);
export const useLoading = () => useContext(LoadingContext);
