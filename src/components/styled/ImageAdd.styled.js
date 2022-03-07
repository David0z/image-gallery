import styled from "styled-components";

export const StyledImageAdd = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0 10%;

    @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.large}) {
        padding: 0 5%;
    }
`

export const AddNewImage = styled.div`
    position: relative;
    font-size: 1.9rem;
    background-color: ${({theme}) => theme.colors.second};
    width: max-content;
    padding: .5rem 1.5rem 0 1.5rem;
    border-radius: 1rem 1rem 0 0;
    user-select: none;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 100%;
        width: 2rem;
        height: 100%;
        background-color: ${({theme}) => theme.colors.second};
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 100%;
        width: 2rem;
        height: 100%;
        background-color: ${({theme}) => theme.colors.first};
        border-radius: 0 0 0 2rem;
    }
`

export const FormWrapper = styled.div`
    padding: .5rem;
    background-color: ${({theme}) => theme.colors.second};
    border-radius: 0 1rem 1rem 1rem;
    width: max-content;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;

    @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr var(--size);
        grid-column-gap: 1rem;
    }
`

export const InputsWrapper = styled.div`
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
        grid-column: 1 / 2;
        margin: 0;
    }

    input {
        display: block;
        width: 44rem;
        height: calc(var(--size) / 2 - .5rem);
        padding-left: 1rem;
        border-radius: 1rem;
        border: none;
        font-size: calc(var(--size) / 2 - 1.2rem);

        &::selection {
        background-color: #000;
        color: #fff;
        }

        @media (max-width: ${({theme}) => theme.resolution.xlarge}) {
            width: 40rem;
        }

        @media (max-width: ${({theme}) => theme.resolution.large}) {
            width: 33rem;
        }

        @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
            width: 100%;
        }
    }
`

export const UrlInput = styled.input`
    background-color: ${({isUrlError, isInvalidUrl , theme}) => isUrlError === true || isInvalidUrl === true ? 'pink' : theme.colors.third};
    color: ${({isUrlError, isInvalidUrl, theme}) => isUrlError === true || isInvalidUrl === true ? 'red' : theme.colors.fourth};

    &:focus {
        color: ${({isUrlError, isInvalidUrl, theme}) => isUrlError === true || isInvalidUrl === true ? 'red' : theme.colors.fifth};
        outline: 0.14rem solid ${({isUrlError, isInvalidUrl}) => isUrlError === true || isInvalidUrl === true ? 'red' : 'black'};
    }

    &::placeholder {
        color: ${({isUrlError, isInvalidUrl, theme}) => isUrlError === true || isInvalidUrl === true ? 'red' : theme.colors.fourth};
    }
`

export const TitleInput = styled.input`
    background-color: ${({isTitleError, theme}) => isTitleError === true ? 'pink' : theme.colors.third};
    color: ${({isTitleError, theme}) => isTitleError === true ? 'red' : theme.colors.fourth};

    &:focus {
        color: ${({isTitleError, theme}) => isTitleError === true ? 'red' : theme.colors.fifth};
        outline: 0.14rem solid ${({isTitleError}) => isTitleError === true ? 'red' : 'black'};
    }

    &::placeholder {
        color: ${({isTitleError, theme}) => isTitleError === true ? 'red' : theme.colors.fourth};
    }
`

export const AddButton = styled.button`
    width: var(--size);
    height: var(--size);
    padding: 0;
    border: none;
    color: ${({theme}) => theme.colors.fourth};

    &:hover {
        color: ${({theme}) => theme.colors.fifth};
        cursor: pointer;
    }

    &:active {
        transform: scale(0.95);
    }

    svg {
        width: 100%;
        height: 100%;
    }

    @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
        grid-column: 2 / 3;
    }
`