import React, { useState } from "react";
import * as btn from "./styles";

const BtnTheme = () => {
  const [theme, seTheme] = useState(false);

  const handleClick = () => {
    if (theme) {
      seTheme(false);
    } else {
      seTheme(true);
    }
    console.log(theme);
  };

  return (
    <btn.Container>
      <p>Dark Mode</p>
      <div onClick={handleClick} className="toggle">
        <div className="circle"></div>
      </div>
    </btn.Container>
  );
};

export default BtnTheme;
