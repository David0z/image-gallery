import styled from "styled-components";

export const StyledDivWrapper = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    opacity: ${({inView}) => inView === true ? '1' : '0'};
    transform: ${({inView}) => inView === true ? 'scale(1)' : 'scale(0.5)'};
    transition: all .6s;

    &:hover {
        & > div {
            visibility: visible;
        }
    }

    & > div {
        position: absolute;
        visibility: hidden;
        width: 100%;
        background-color: rgba(0, 0, 0, .5);

        &:nth-child(2) {
            --size: 2rem;
            top: 0;
            left: 0;
            height: var(--size);
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        &:nth-child(3) {
            bottom: 0;
            left: 0;
            height: 3rem;
            line-height: 3rem;
            font-size: 2.7rem;
            color: #fff;
            text-align: center;
            overflow: hidden;
            user-select: none;
        }
    }
`

export const StyledImage = styled.img`
    width: 100%;
    height: auto;
`

export const StyledDeleteButton = styled.button`
    --subtract: 0.2rem;
    --newSize: calc(var(--size) - var(--subtract));
    width: var(--newSize);
    height: var(--newSize);
    padding: 0;
    border: none;
    background: transparent;
    color: rgb(116, 0, 0);
    margin-right: calc(var(--subtract) / 2);

    &:hover {
        cursor: pointer;
        color: rgb(216, 0, 0);
    }

    svg {
        width: 100%;
        height: 100%;
    }
`