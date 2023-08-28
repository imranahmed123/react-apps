import React, { useContext } from "react";

const ThemeContext = React.createContext();

function AThemeContextApp() {
  return (
    <ThemeContext.Provider value="light">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>Header Component using useContext - a</h2>
      <p>Theme: {theme}</p>
      <hr />
    </div>
  );
}

export default AThemeContextApp;
