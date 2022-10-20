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
        <label for="toggle"></label>
      </div>
      {theme ? <btn.BodyColorIn /> : <btn.BodyColorOut />}
    </btn.Container>
  );
};

export default BtnTheme;
