import React from "react";

import up from "../../../assets/img/icon-up.svg";
import down from "../../../assets/img/icon-down.svg";

import * as styles from "./styles";

const Overview = (props) => {
  return (
    <styles.Container className={`card`} state={props.state}>
      <div>
        <p className="p">{props.pageView}</p>
        <img src={props.src} alt="social-media" />
      </div>
      <div>
        <h2>{props.amount}</h2>
        <div>
          <img src={props.state ? up : down} alt="arrow-img" />
          <p className="state">{props.percentage}</p>
        </div>
      </div>
    </styles.Container>
  );
};

export default Overview;
