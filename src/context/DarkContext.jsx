/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const DarkContext = createContext();

function DarkProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkContext.Provider>
  );
}
function useDark() {
  const context = useContext(DarkContext);
  if (context === undefined) {
    throw new Error("useDark must be used within a DarkProvider");
  }
  return context;
}

export { DarkProvider, useDark };