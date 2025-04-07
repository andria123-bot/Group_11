import React, { createContext } from "react";

export const FirstContext = createContext();

export const FirstProvider = ({ children }) => {
  const firstValue = "Heloo im first context :p";

  return (
    <FirstContext.Provider value={firstValue}>
      {children}
    </FirstContext.Provider>
  );
};
