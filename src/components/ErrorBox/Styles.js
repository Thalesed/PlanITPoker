import styled from "styled-components";

export const ModelContainer = styled.footer`
    text-align: center;
    background-color: #000000;
    border: solid 3px red;
    border-radius: 18px;
    position: fixed;
    top: 40%;
    left: 50%;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transform: translate(-50%, -50%);
    padding: 20px;
    min-width: 260px;
    min-height: 125px;
    flex-direction: column;
`

export const ErrorMessage = styled.p`
    color: red;
    font-family: 'Orbitron', sans-serif;
    float: left;
    margin: 0;
    font-size: 1.5em;
`;

export const CloseX = styled.p`
    color: red;
    font-family: 'Orbitron', sans-serif;
    float: right;
    margin: 0;
    position: fixed;
    top: 2%;
    left: 90%;
    font-size: 2em;
    cursor: pointer;
`;