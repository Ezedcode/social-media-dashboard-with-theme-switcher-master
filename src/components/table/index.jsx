import React from "react";
import Followers from "../card/followers";
import Overview from "../card/overview";

import facebook from "../../assets/img/icon-facebook.svg";
import twitter from "../../assets/img/icon-twitter.svg";
import instagram from "../../assets/img/icon-instagram.svg";
import youtube from "../../assets/img/icon-youtube.svg";

import * as table from "./styles";

const Table = () => {
  return (
    <table.Container>
      <div>
        <Followers
          id="facebook"
          state={true}
          src={facebook}
          page="@nathanf"
          followers="1044"
          social="FOLLOWERS"
          daily="12"
        />
        <Followers
          id="twitter"
          state={true}
          src={twitter}
          page="@nathanf"
          followers="1987"
          social="FOLLOWERS"
          daily="99"
        />
        <Followers
          id="instagram"
          state={true}
          src={instagram}
          page="@realnathanf"
          followers="11k"
          social="FOLLOWERS"
          daily="1099"
        />
        <Followers
          id="youtube"
          state={false}
          src={youtube}
          page="@Nathan F"
          followers="8239"
          social="FOLLOWERS"
          daily="12"
        />
      </div>

      <h2>Overview - Today</h2>

      <div>
        <Overview
          state={true}
          pageView="Page Views"
          src={facebook}
          amount="87"
          percentage="3%"
        />
        <Overview
          state={false}
          pageView="Likes"
          src={facebook}
          amount="52"
          percentage="2%"
        />
        <Overview
          state={true}
          pageView="Likes"
          src={instagram}
          amount="5462"
          percentage="2257%"
        />
        <Overview
          state={true}
          pageView="Profile Views"
          src={instagram}
          amount="52K"
          percentage="1375%"
        />
        <Overview
          state={true}
          pageView="Retweets"
          src={twitter}
          amount="117"
          percentage="303%"
        />
        <Overview
          state={true}
          pageView="Likes"
          src={twitter}
          amount="507"
          percentage="553%"
        />
        <Overview
          state={false}
          pageView="Likes"
          src={youtube}
          amount="107"
          percentage="19%"
        />
        <Overview
          state={false}
          pageView="Total Views"
          src={youtube}
          amount="1407"
          percentage="12%"
        />
      </div>
    </table.Container>
  );
};

export default Table;
