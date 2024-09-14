import styled from "styled-components";

export const Space = styled.input`
    background-color: #232323;
    border: solid 1px gold;
    outline: none;
    padding: 10px;
    border-radius: 8px;
    color: #DDDDDD;
    min-width: 200px;
    margin: 12px;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 2px;
    font-size: 1.3em;

    &:focus {
        border: solid 2px gold;
        border-color: gold;
    }

    @media (max-width: 1024px) {
        font-size: 1.2em;
        padding: 8px;
        min-width: 180px;
    }

    @media (max-width: 768px) {
        font-size: 1.1em;
        padding: 7px;
        width: 160px;
    }

    @media (max-width: 480px) {
        font-size: 1em;
        padding: 6px;
        width: 140px;
    }

    @media (max-width: 320px) {
        font-size: 0.9em;
        padding: 5px;
        width: 120px;
    }
`;
