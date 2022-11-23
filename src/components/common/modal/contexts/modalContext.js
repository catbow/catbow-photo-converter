import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [deleteModal, setDeleteModal] = useState(true);

  return (
    <ModalContext.Provider value={{ deleteModal, setDeleteModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useVisibleModal = () => useContext(ModalContext);
