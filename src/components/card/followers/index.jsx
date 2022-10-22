import React from "react";

import up from "../../../assets/img/icon-up.svg";
import down from "../../../assets/img/icon-down.svg";

import * as styles from "./styles";

const Followers = (props) => {
  return (
    <styles.Container className={`${props.id}`} state={props.state}>
      <div></div>
      <div className="card">
        <div>
          <img src={props.src} alt="social-media" />
          <p className="p">{props.page}</p>
        </div>
        <h1>{props.followers}</h1>
        <p>{props.social}</p>
        <div>
          <img src={props.state ? up : down} alt="social-media" />
          <p className="state">{props.daily} Today</p>
        </div>
      </div>
    </styles.Container>
  );
};

export default Followers;
