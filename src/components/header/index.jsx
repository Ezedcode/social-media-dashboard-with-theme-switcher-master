import React from "react";
import BtnTheme from "../btnTheme/index";

import * as header from "./styles";

const Header = () => {
  return (
    <header.Container>
      <nav>
        <h1>Social Media Dash Board</h1>
        <p>Total Followers: 23,004</p>
      </nav>
      <hr />
      <BtnTheme />
    </header.Container>
  );
};

export default Header;
