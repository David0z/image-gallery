import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Abel', sans-serif;
  }
  
  body {
    font-family: 'Abel', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
