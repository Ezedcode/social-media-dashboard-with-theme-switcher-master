import React, { useState } from "react";
import * as btn from "./styles";

const BtnTheme = () => {
  const [theme, seTheme] = useState(false);
  const [nameTheme, setNameTheme] = useState("light");

  const handleClick = () => {
    if (theme) {
      seTheme(false);
      setNameTheme("light");
    } else {
      seTheme(true);
      setNameTheme("dark");
    }
  };

  return (
    <btn.Container>
      <p>Dark Mode</p>
      <div onClick={handleClick} className={`toggle ${nameTheme}`}>
        <div className="circle"></div>
      </div>
    </btn.Container>
  );
};

export default BtnTheme;
