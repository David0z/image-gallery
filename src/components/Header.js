import React from 'react'
import { StyledHeader } from './styled/Header.styled'
import { BsImageFill } from "react-icons/bs";

function Header() {
  return (
    <StyledHeader>
        <BsImageFill />
        <p>IMAGE GALLERY APP</p>
    </StyledHeader>
  )
}

export default Header