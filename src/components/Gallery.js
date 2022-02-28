import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { GalleryWrapper, ImagesWrapper, SearchbarInput, SearchbarLabel, SearchBarWrapper } from './styled/Gallery.styled'

function Gallery() {
  return (
    <GalleryWrapper>
        <SearchBarWrapper>
            <SearchbarInput id='searchbar' placeholder='Search...'/>
            <SearchbarLabel htmlFor='searchbar'>
                < BsSearch />
            </SearchbarLabel>
        </SearchBarWrapper>
        <ImagesWrapper>
            
        </ImagesWrapper>
    </GalleryWrapper>
  )
}

export default Gallery