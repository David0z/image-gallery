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

    p {
        padding: 0;
        margin: 0;
        line-height: 5rem;
    }

    svg {
        font-size: 4.5rem;
    }
`