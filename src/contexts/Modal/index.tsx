import React, { createContext, useContext, useState } from "react";

interface MobileDrawerProviderProps {
  children: React.ReactNode;
}

const ModalContext = createContext<any>({});

const ModalProvider = ({ children }: MobileDrawerProviderProps) => {
  const [modalState, setModalState] = useState({ visible: false });

  const openDrawer = (payload: any) =>
    setModalState({ ...payload, visible: true });
  const closeDrawer = () => setModalState({ visible: false });

  return (
    <ModalContext.Provider value={{ modalState, closeDrawer, openDrawer }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export { useModalContext, ModalProvider };
