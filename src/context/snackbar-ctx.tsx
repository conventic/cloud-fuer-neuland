import React, { useState, useContext, createContext } from "react";

const SnackbarContext = createContext();
const SnackbarContextUpdate = createContext();

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export const useSnackbarUpdate = () => {
  return useContext(SnackbarContextUpdate);
};

export const SnackbarProvider = ({ children }: { children: any }) => {
  const [obj, setObj] = useState({
    open: false,
    message: "",
  });

  const toggleSnackbar = (msg: string) => {
    setObj({ ...obj, open: true, message: msg });
    setTimeout(() => {
      setObj({ ...obj, open: false, message: "" });
    }, 3000);
  };

  return (
    <SnackbarContext.Provider value={obj}>
      <SnackbarContextUpdate.Provider value={toggleSnackbar}>
        {children}
      </SnackbarContextUpdate.Provider>
    </SnackbarContext.Provider>
  );
};
