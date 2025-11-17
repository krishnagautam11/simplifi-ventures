import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "React Native Developer",  
    message: "",
    resume: null,
    investorType: "Individual",           
    investmentRange: "₹1L – ₹5L",        
    consent: false,
  });

  // const [formData, setFormData] = useState({});

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const updateForm = (newData) => setFormData((prev) => ({ ...prev, ...newData }));


  return (
    <AppContext.Provider value={{ isMenuOpen, toggleMenu, formData, updateForm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
