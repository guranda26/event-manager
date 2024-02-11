import { createContext, useContext, useMemo, useState } from "react";

export const dictionaryOptions = {
  ka: "ქართული ტექსტი",
  eng: "Text in English",
};

export const taskOptions = {
  ka: "დავალება შესრულებულია",
  eng: "Task is completed",
};

const DictionaryContext = createContext(null);

const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState("eng");
  const contextValue = useMemo(
    () => ({
      lang: lang ? "eng" : "ka",
      toggleLanguage: () => setLang((prev) => !prev),
    }),
    [lang, setLang]
  );

  return (
    <DictionaryContext.Provider value={contextValue}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionaryContext = () => {
  const contextValue = useContext(DictionaryContext);

  if (!contextValue)
    throw new Error("Your component is not inside UserContextProvider");

  return contextValue;
};
export default LanguageContextProvider;
