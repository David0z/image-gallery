import styled from 'styled-components'

export const AlertWrapper = styled.div`
    --height: 15rem;
    --margin: .25rem;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: var(--margin);
    padding-left: var(--margin);
    width: 100%;
    height: calc(var(--height) + 2 * var(--margin));
    z-index: 20;
    overflow: hidden;
    pointer-events: none;

    & > div {
        backdrop-filter: blur(1rem);
        border-radius: .7rem;
        width: max-content;
        height: max-content;
    }
`

export const AlertInstance = styled.div`
    box-sizing: border-box;
    border-radius: .7rem;
    width: 20rem;
    height: calc(var(--height) / 3);
    margin-bottom: var(--margin);
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    align-items: center;
    background-color: ${({type}) => type === 'error' ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 255, 0, 0.5)'};

    p {
        padding: 0;
        margin: 0;
        font-size: 1.7rem;
    }

    & > div {
        display: flex;
        align-items: center;
    }
`

export const CloseAlertButton = styled.button`
    display: flex;
    place-items: center;
    border: none;
    background: none;
    --size: 2rem;
    height: var(--size);
    width: var(--size);
    font-size: var(--size);
    padding: 0;
    color: rgba(0, 0, 0, 0.8);
    pointer-events: auto;

    &:hover {
        cursor: pointer;
    }
`

export const IndicationIcon = styled.div`
    --size: 2rem;
    height: var(--size);
    width: var(--size);
    color: ${({type}) => type === 'error' ? 'red' : 'green'};
    font-size: var(--size);
    margin-right: .5rem;
`