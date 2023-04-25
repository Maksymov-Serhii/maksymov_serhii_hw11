import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ContextBackground = () => {

  const context = useContext(ThemeContext);

  return (
    <>
      <h1>Background theme: { context.theme }</h1>
      <button onClick={ context.toggleTheme } className="button">Change background theme</button>
    </>
  )
}

export default ContextBackground;
