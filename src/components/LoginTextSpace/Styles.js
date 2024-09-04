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

    &:focus{
        border: solid 2px gold;
        border-color: gold;
    }
`