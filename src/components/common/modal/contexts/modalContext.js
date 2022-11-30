import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [onModal, setOnModal] = useState(false);
  const [isUploadButton, setIsUploadButton] = useState('');

  console.log(isUploadButton);

  return (
    <ModalContext.Provider
      value={{ onModal, setOnModal, isUploadButton, setIsUploadButton }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useVisibleModal = () => useContext(ModalContext);
