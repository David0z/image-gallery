import React from 'react'
import { BsXSquareFill } from 'react-icons/bs'
import { StyledDeleteButton, StyledDivWrapper, StyledImage } from './styled/Image.styled'

function Image({ image, handleImageDelete }) {

  return (
    <StyledDivWrapper>
        <StyledImage src={image.source} alt={image.title} />
        <div>
          <StyledDeleteButton onClick={() => handleImageDelete(image.id)}>
            <BsXSquareFill />
          </StyledDeleteButton>
        </div>
        <div>{image.title}</div>
    </StyledDivWrapper>
  )
}

export default Image