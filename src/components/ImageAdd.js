import React, { useContext, useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { AddButton, AddNewImage, FormWrapper, InputsWrapper, StyledImageAdd, TitleInput, UrlInput } from './styled/ImageAdd.styled'
import { StateContext } from '../App';
import { v4 as uuidv4 } from 'uuid';

function ImageAdd() {

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const {setImages} = useContext(StateContext);

  function handleImageAdd() {
    if (title === '') {
      return; 
      // ALERT!!!!!!!!!
    }

    setImages(prevImages => [...prevImages, {
      source: url,
      title: title,
      id: uuidv4()
    }])
    setUrl('');
    setTitle('');
  }

  return (
    <StyledImageAdd>
        <AddNewImage>Add New Image</AddNewImage>
        <FormWrapper>
            <InputsWrapper>
                <UrlInput placeholder='Image URL' type='text' onChange={(e) => setUrl(e.target.value)} value={url}/>
                <TitleInput placeholder='Title' type='text' onChange={(e) => setTitle(e.target.value)} value={title}/>
            </InputsWrapper>
            <AddButton onClick={handleImageAdd}>
                < BsFillPlusSquareFill />
            </AddButton>
        </FormWrapper>
    </StyledImageAdd>
  )
}

export default ImageAdd