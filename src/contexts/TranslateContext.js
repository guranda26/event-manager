import { createContext, useContext, useMemo, useState } from "react";

export const dictionaryOptions = {
  ka: "ქართული ტექსტი",
  eng: "Text in English",
};

export const taskOptions = {
  ka: {
    completed: "დავალება შესრულებულია",
    notCompleted: "დავალება არ არის შესრულებული",
    label: "შესრულებული",
  },
  eng: {
    completed: "Event is completed",
    notCompleted: "Event is not completed",
    label: "Completed",
  },
};

export const addEvent = {
  ka: "ივენთების ჩამონათვალი",
  eng: "Event List",
};
export const eventName = {
  ka: "ივენთის სახელწოდება",
  eng: "Event Name",
};
export const editOptions = {
  ka: "ივენთის რედაქტირება",
  eng: "Edit Event Details",
};
export const deleteEvent = {
  ka: "ივენთის გაუქმება",
  eng: "Cancel Event",
};
export const eventDate = {
  ka: "თარიღი",
  eng: "Date",
};
export const mainPage = {
  ka: "მთავარი გვერდი",
  eng: "Main Page",
};

export const createEvent = {
  ka: "ახალი ივენთის დამატება",
  eng: "Create New Event",
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
