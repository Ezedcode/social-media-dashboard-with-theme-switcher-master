import React from "react";
import Followers from "../card/followers";
import Overview from "../card/overview";

import up from "../../assets/img/icon-up.svg";
import facebook from "../../assets/img/icon-facebook.svg";

import * as table from "./styles";

const Table = () => {
  return (
    <table.Container>
      <Followers
        id="facebook"
        src={facebook}
        page="@nathanf"
        followers="1987"
        social="FOLLOWERS"
        src2={up}
        daily="12"
      />
      <Overview />
    </table.Container>
  );
};

export default Table;
