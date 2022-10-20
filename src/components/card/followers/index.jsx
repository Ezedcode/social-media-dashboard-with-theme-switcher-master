import React from "react";
import * as styles from "./styles";

const Followers = (props) => {
  return (
    <styles.Container className={`card ${props.id}`}>
      <div>
        <div>
          <img src={props.src} alt="social-media" />
          <p>{props.page}</p>
        </div>
        <h1>{props.followers}</h1>
        <p>{props.social}</p>
        <div>
          <img src={props.src2} alt="social-media" />
          <p>{props.daily} Today</p>
        </div>
      </div>
    </styles.Container>
  );
};

export default Followers;
