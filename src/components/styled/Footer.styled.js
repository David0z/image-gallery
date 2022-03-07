import styled from "styled-components";

export const StyledFooter = styled.footer`
    --border: .15rem solid black;
    border-top: var(--border);
    background-color: ${({theme}) => theme.colors.third};
    box-sizing: border-box;
    width: 100%;
    padding: .3rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
        flex-direction: column;
    }

    p {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 600;

        &::selection {
        background-color: #000;
        color: #fff;
        }
    }
`

export const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
        flex-direction: column;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.fifth};
        font-size: 1.8rem;
        display: grid;
        place-items: center;

        @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
            display: flex;
            align-self: flex-start;
        }

        span {
            display: none;

            @media (orientation: portrait), (max-width: ${({theme}) => theme.resolution.medium}) {
                display: inline-block;
                margin-left: 1rem;
            }
        }
    }
`