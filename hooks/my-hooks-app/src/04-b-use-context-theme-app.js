import React, { useContext } from "react";

const ThemeContext = React.createContext();

function BThemeContextApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>Header Component using useContext - b</h2>
      <p>Theme: {theme}</p>
      <hr />
    </div>
  );
}

export default BThemeContextApp;
