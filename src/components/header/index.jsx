import React from "react";
import BtnTheme from "../btnTheme/index";

import * as header from "./styles";

const Header = () => {
  return (
    <header.Container>
      <div>
        <div>
          <h2>Social Media Dash Board</h2>
          <p>Total Followers: 23,004</p>
        </div>
        <hr />
        <BtnTheme />
      </div>
    </header.Container>
  );
};

export default Header;
