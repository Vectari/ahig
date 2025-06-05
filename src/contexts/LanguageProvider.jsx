import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

// Export only the component here to satisfy Fast Refresh
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
