import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ImageAdd from "./components/ImageAdd";
import { StyledContentWrapper } from "./components/styled/ContentWrapper.styled";

const theme = {
  colors: {
    first: '#fff',
    second: '#EBEBEB',
    third: '#DADADA',
    fourth: 'rgba(0, 0, 0, 64%)',
    fifth: '#000000'
  }
}

const GlobalStyle = createGlobalStyle`

  :root {
    --size: 7rem;
  }

  * {
    font-family: 'Abel', sans-serif;
  }
  
  body {
    font-family: 'Abel', sans-serif;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      width: .8rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: black;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({theme}) => theme.colors.third};
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <StyledContentWrapper>
          <ImageAdd/>
          <Gallery />
        </StyledContentWrapper>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
