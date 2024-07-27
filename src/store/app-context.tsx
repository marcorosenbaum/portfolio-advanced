import { createContext, useState } from "react";

const AppContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

import React from "react";

export function AppContextProvider(props: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  function setDarkModeHandler() {
    setDarkMode((prevDarkMode) => {
      return !prevDarkMode;
    });
    console.log(darkMode);
  }

  const context = {
    darkMode: darkMode,
    setDarkMode: setDarkModeHandler,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
