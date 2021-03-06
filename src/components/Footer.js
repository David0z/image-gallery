import React from 'react'
import { BsGithub, BsLinkedin, BsPersonSquare } from 'react-icons/bs'
import { ContactWrapper, StyledFooter } from './styled/Footer.styled'

function Footer() {
  return (
    <StyledFooter>
        <p>Made by: Dawid Czesak</p>
        <ContactWrapper>
            <p>dawidczesak98@gmail.com</p>
            <a href='https://david0z.github.io/' target='_blank'>
                <BsPersonSquare />
                <span>Personal Website</span>
            </a>
            <a href='https://www.linkedin.com/in/dawid-czesak-390171172/?locale=en_US' target='_blank'>
                <BsLinkedin />
                <span>LinkedIn</span>
            </a>
            <a href='https://github.com/David0z' target='_blank'>
                <BsGithub />
                <span>GitHub</span>
            </a>
        </ContactWrapper>
    </StyledFooter>
  )
}

export default Footer
