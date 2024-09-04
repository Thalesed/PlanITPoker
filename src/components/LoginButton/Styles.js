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
    text-weight: bold;

    &:hover{
        color: gold;
        background-color: #000000;
        transform: scale(1.2);
    }
`