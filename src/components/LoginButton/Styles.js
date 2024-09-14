import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    background-color: gold;
    color: #000000;
    border-radius: 24px;
    padding: 10px;
    border: solid 2px #ffffff;
    font-size: 1em;
    margin: 12px;
    min-width: 250px;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    font-family: 'Press Start 2P', cursive;
    font-weight: bold;

    &:hover{
        color: gold;
        background-color: #000000;
        transform: scale(1.2);
    }

    @media (max-width: 1024px) {
        min-width: 200px;
        font-size: 0.9em;
        padding: 8px;
    }

    @media (max-width: 768px) {
        min-width: 180px;
        font-size: 0.8em;
        padding: 7px;
    }

    @media (max-width: 480px) {
        min-width: 150px;
        font-size: 0.7em;
        padding: 6px;
    }

    @media (max-width: 320px) {
        min-width: 120px;
        font-size: 0.6em;
        padding: 5px;
    }
`;
