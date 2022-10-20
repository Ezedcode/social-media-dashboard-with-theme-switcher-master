import React from "react";
import Header from "./components/header";
import GlobalStyles from "./theme/GlobalStyles";

import Table from "./components/table";

const App = () => {
  return (
    <div>
      <Header />
      <Table />
      <GlobalStyles />
    </div>
  );
};

export default App;
