import React, { useContext, useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GalleryWrapper, ImagesWrapper, SearchbarInput, SearchbarLabel, SearchBarWrapper } from './styled/Gallery.styled'
import { StateContext } from '../App'
import Image from './Image'
import Masonry from 'react-masonry-css'

function Gallery() {

  const {images, setImages} = useContext(StateContext);
  const [filterText, setFilterText] = useState('');
  const [filteredImages, setFilteredImages] = useState(images);

  // MASONRY GRID QUERY BREAKPOINTS
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    768: 1
  };

  function handleSearch(e) {
    setFilterText(e.target.value.toLowerCase());
    setFilteredImages(images.filter(image => image.title.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  function handleImageDelete(id) {
    setImages(prevImages => prevImages.filter(image => image.id != id));
  }

  useEffect(() => {
    setFilteredImages(images.filter(image => image.title.toLowerCase().includes(filterText)));
  }, [images]);

  return (
    <GalleryWrapper>
        <SearchBarWrapper>
            <SearchbarInput id='searchbar' placeholder='Search...' onChange={handleSearch} />
            <SearchbarLabel htmlFor='searchbar'>
                < BsSearch />
            </SearchbarLabel>
        </SearchBarWrapper>
        <ImagesWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
              {filteredImages.map(image => (
                <Image image={image} key={image.id} handleImageDelete={handleImageDelete} />
              ))}
          </Masonry>
        </ImagesWrapper>
    </GalleryWrapper>
  )
}

export default Gallery