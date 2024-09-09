import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    background-color: gold;
    color: #000000;
    border-radius: 8px;
    padding: 6px;
    border: solid 2px #ffffff;
    font-size: 1.5em;
    margin: 20px;
    min-width: 200px;
    text-align: center;
    align-items: center;
    justify-content: center;
    align-self: right;
    float: right;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    font-family: 'Press Start 2P', cursive;
    text-weight: bold;

    &:hover{
        color: gold;
        background-color: #000000;
    }
`