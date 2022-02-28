import React from 'react'
import { BsGithub, BsLinkedin, BsPersonSquare } from 'react-icons/bs'
import { ContactWrapper, StyledFooter } from './styled/Footer.styled'

function Footer() {
  return (
    <StyledFooter>
        <p>Made by: Dawid Czesak</p>
        <ContactWrapper>
            <p>dawid5soon5@gmail.com</p>
            <a href='https://david0z.github.io/' target='_blank'>
                <BsPersonSquare />
            </a>
            <a href='https://www.linkedin.com/in/dawid-czesak-390171172/?locale=en_US' target='_blank'>
                <BsLinkedin />
            </a>
            <a href='https://github.com/David0z' target='_blank'>
                <BsGithub />
            </a>
        </ContactWrapper>
    </StyledFooter>
  )
}

export default Footer