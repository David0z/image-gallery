import React, { useContext, useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { AddButton, AddNewImage, FormWrapper, InputsWrapper, StyledImageAdd, TitleInput, UrlInput } from './styled/ImageAdd.styled'
import { StateContext } from '../App';
import { v4 as uuidv4 } from 'uuid';

function ImageAdd() {

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const {setImages} = useContext(StateContext);
  const [isUrlError, setIsUrlError] = useState(false);
  const [isTitleError, setIsTitleError] = useState(false);

  function handleImageAdd() {
    // Alert and return if empty arrays
    if (url === '' || title === '') {
      if (title === '') {
        setIsTitleError(true);
      }
      if (url === '') {
        setIsUrlError(true);
      }
      return;
    }

    // Create unappended img to check for errors
    let temporaryImg = document.createElement('img');
    temporaryImg.src = url;

    temporaryImg.addEventListener('error', () => {
      setIsUrlError(true);
    });

    temporaryImg.addEventListener('load', () => {
      setImages(prevImages => [...prevImages, {
        source: url,
        title: title,
        id: uuidv4()
      }]);
      setUrl('');
      setTitle('');
    });
  }

  function handleInput(e, type) {
    switch(type) {
      case 'url':
        setUrl(e.target.value);
        if (isUrlError) {
          setIsUrlError(false);
        }
        break;
      case 'title':
        setTitle(e.target.value);
        if (isTitleError) {
          setIsTitleError(false);
        }
        break;
    }
  }

  return (
    <StyledImageAdd>
        <AddNewImage>Add New Image</AddNewImage>
        <FormWrapper>
            <InputsWrapper>
                <UrlInput placeholder='Image URL' type='text' onChange={(e) => handleInput(e, 'url')} value={url} isUrlError={isUrlError}/>
                <TitleInput placeholder='Title' type='text' onChange={(e) => handleInput(e, 'title')} value={title} isTitleError={isTitleError}/>
            </InputsWrapper>
            <AddButton onClick={handleImageAdd}>
                < BsFillPlusSquareFill />
            </AddButton>
        </FormWrapper>
    </StyledImageAdd>
  )
}

export default ImageAdd