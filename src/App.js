import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ImageAdd from "./components/ImageAdd";
import { StyledContentWrapper } from "./components/styled/ContentWrapper.styled";
export const StateContext = createContext();

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

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -20px; /* gutter size offset */
    /* margin-bottom: -20px; */
    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: 20px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 20px;
  }
`;

function App() {

  const [images, setImages] = useState([
    {
      source: 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60',
      title: 'Cat',
      id: uuidv4()
    },
    {
      source: 'https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941__340.jpg',
      title: 'Cat 2 b',
      id: uuidv4()
    },
    {
      source: 'https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg',
      title: 'Cat 3 b',
      id: uuidv4()
    },
    {
      source: 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60',
      title: 'Cat 4 b',
      id: uuidv4()
    },
    {
      source: 'https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941__340.jpg',
      title: 'Cat 5 b',
      id: uuidv4()
    },
    {
      source: 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60',
      title: 'Cat 6 b',
      id: uuidv4()
    },
    {
      source: 'https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg',
      title: 'Cat 7',
      id: uuidv4()
    },
    {
      source: 'https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg',
      title: 'Cat 8',
      id: uuidv4()
    },
    {
      source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg',
      title: 'New Cat',
      id: uuidv4()
    }
  ]);

  return (
    <StateContext.Provider value={{images: images, setImages: setImages}}>
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
    </StateContext.Provider>
  );
}

export default App;
