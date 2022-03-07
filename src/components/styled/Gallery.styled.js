import styled from "styled-components";

export const GalleryWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0 10%;
    margin-top: 5rem;
    background: linear-gradient(to bottom, white, ${({theme}) => theme.colors.third});

    @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.large}) {
        padding: 0 5%;
    }
`

export const SearchBarWrapper = styled.div`
    display: flex;
    --height: calc(var(--size) / 2 - .5rem);
    height: var(--height);
    --border: calc(var(--height) / 2);
    border-radius: var(--border);
    width: max-content;
    overflow: hidden;
    box-shadow: .5rem .5rem 1rem rgba(0, 0, 0, .24);

    @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
        width: 100%;
        justify-content: space-between;
    }
`

export const SearchbarInput = styled.input`
    padding-left: 1.5rem;
    outline: none;
    border: none;
    background-color: ${({theme}) => theme.colors.third};
    color: ${({theme}) => theme.colors.fourth};
    font-size: calc(var(--size) / 2 - 1.2rem);

    &::selection {
        background-color: #000;
        color: #fff;
    }

    @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
        width: 100%;
    }
`

export const SearchbarLabel = styled.label`
    display: grid;
    place-items: center;
    font-size: 1.8rem;
    padding: 0 1rem;
    color: ${({theme}) => theme.colors.fourth};
`

export const ImagesWrapper = styled.div`
    margin-top: 3rem;
    margin-bottom: 5rem;
    min-height: 10rem;
`