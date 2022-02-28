import React from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { AddButton, AddNewImage, FormWrapper, InputsWrapper, StyledImageAdd, TitleInput, UrlInput } from './styled/ImageAdd.styled'

function ImageAdd() {
  return (
    <StyledImageAdd>
        <AddNewImage>Add New Image</AddNewImage>
        <FormWrapper>
            <InputsWrapper>
                <UrlInput placeholder='Image URL' type='text' />
                <TitleInput placeholder='Title' type='text' />
            </InputsWrapper>
            <AddButton>
                < BsFillPlusSquareFill />
            </AddButton>
        </FormWrapper>
    </StyledImageAdd>
  )
}

export default ImageAdd