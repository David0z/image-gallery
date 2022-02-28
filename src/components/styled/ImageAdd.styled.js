import styled from "styled-components";

export const StyledImageAdd = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0 10%;
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
        width: 100%;
        height: 100%;
        background-color: ${({theme}) => theme.colors.second};
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
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
`

export const InputsWrapper = styled.div`
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
        display: block;
        width: 44rem;
        height: calc(var(--size) / 2 - .5rem);
        padding-left: 1rem;
        border-radius: 1rem;
        border: none;
        background-color: ${({theme}) => theme.colors.third};
        color: ${({theme}) => theme.colors.fourth};
        font-size: calc(var(--size) / 2 - 1.2rem);

        &:focus {
            color: ${({theme}) => theme.colors.fifth};
        }
    }
`

export const UrlInput = styled.input`

`

export const TitleInput = styled.input`

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
`