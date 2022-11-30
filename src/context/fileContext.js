import React, { createContext, useContext, useState } from 'react';

export const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [fileUrl, setFileUrl] = useState('');
  const [buttonState, setButtonState] = useState(true);

  return (
    <FileContext.Provider
      value={{ fileUrl, setFileUrl, buttonState, setButtonState }}
    >
      {children}
    </FileContext.Provider>
  );
};

export const useUploadFile = () => useContext(FileContext);
