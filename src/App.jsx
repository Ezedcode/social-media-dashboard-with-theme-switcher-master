import React from "react";
import Header from "./components/header";
import GlobalStyles from "./theme/GlobalStyles";

import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  margin: 0 auto;

  @media only screen and (max-width: 375px) {
    width: 85%;
  }
`;

const App = () => {
  return (
    <Container>
      <Header />
      <GlobalStyles />
    </Container>
  );
};

export default App;
