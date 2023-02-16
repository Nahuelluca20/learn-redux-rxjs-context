import {useContext, createContext, useState} from "react";

export const ContextHomeContext = createContext();

export const HomeContextProvider = ({children}) => {
  const [homeContextValue, setHomeContextValue] = useState("");

  return (
    <ContextHomeContext.Provider value={{homeContextValue, setHomeContextValue}}>
      {children}
    </ContextHomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(ContextHomeContext);

  if (context === undefined) {
    throw new Error("useHomeContext must be used within a HomeContextProvider");
  }

  return context;
};
