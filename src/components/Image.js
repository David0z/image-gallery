import React from 'react'
import { BsXSquareFill } from 'react-icons/bs'
import { StyledDeleteButton, StyledDivWrapper, StyledImage } from './styled/Image.styled'
import { useInView } from 'react-intersection-observer'

function Image({ image, handleImageDelete }) {
  
  const { ref, inView } = useInView({triggerOnce: true});

  return (
    <StyledDivWrapper ref={ref} inView={inView}>
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