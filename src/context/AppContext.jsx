import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // 👇 global states you might want everywhere
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({});


  // 👇 helper functions
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const updateForm = (newData) => setFormData((prev) => ({ ...prev, ...newData }));


  return (
    <AppContext.Provider value={{ isMenuOpen, toggleMenu, formData, updateForm}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
