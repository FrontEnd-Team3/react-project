import { createContext, useContext, useState } from "react";

export const useModal = () => useContext(openModal);

const openModal = createContext();

const OpenModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <openModal.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </openModal.Provider>
  );
};

export default OpenModalProvider;
