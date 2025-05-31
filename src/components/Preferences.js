import React, { useState } from "react";
function Preferences({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const styles = {
    backgroundColor: darkMode ? "#121212" : "#f4f4f4",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    padding: "2rem",
    transition: "all 0.3s ease-in-out",
  };

  const btnStyle = {
    backgroundColor: darkMode ? "#f4f4f4" : "#121212",
    color: darkMode ? "#000000" : "#ffffff",
  };

  return (
    <div style={styles}>
      <div className="container-fluid">
        <p>Preferences component</p>
        <h1> {darkMode ? "Dark Mode" : "Light Mode"}</h1>
      </div>
      <button
        className="btn btn-primary"
        style={btnStyle}
        onClick={toggleTheme}
      >
        {" "}
        {darkMode ? "Change to Light Mode" : "Changue to Dark Mode"}
      </button>
      <h4 className="pt-4">Button component:</h4>
      {children}
    </div>
  );
}
export default Preferences;
