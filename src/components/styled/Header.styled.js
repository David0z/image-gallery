import styled from "styled-components";

export const StyledHeader = styled.div`
    margin-top: 1.5rem;
    width: 100%;
    font-size: 5rem;
    --border: .3rem solid black;
    border-top: var(--border);
    border-bottom: var(--border);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    gap: 2rem;

    @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
        font-size: 10vw;
        gap: 4vw;
        padding: 3vw 0;
        --border: .6vw solid black;
    }

    p {
        padding: 0;
        margin: 0;
        line-height: 5rem;
        pointer-events: none;
        user-select: none;

        @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
            line-height: 10vw;
        }
    }

    svg {
        font-size: .9em;
    }
`