import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <DarkModeContext.Provider value={{ isFakeDark, setIsFakeDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkModeContextProvider() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error(
      "DarkModeContext was used outside of the DarkModeContextProvider"
    );
  return context;
}

export { useDarkModeContextProvider, DarkModeProvider };
