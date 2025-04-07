import React, { createContext } from "react";

export const SecondContext = createContext();

export const SecondProvider = ({ children }) => {
  const secondValue = "მე ვარ მეორე კონტექსტი";

  return (
    <SecondContext.Provider value={secondValue}>
      {children}
    </SecondContext.Provider>
  );
};
