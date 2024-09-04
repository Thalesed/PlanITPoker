import styled from "styled-components";

export const ModelContainer = styled.footer`
    text-align: center;
    background-color: #EFEFEF;
    border: solid 2px gold;
    border-radius: 18px;
    position: fixed;
    top: 40%;
    left: 50%;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transform: translate(-50%, -50%);
    padding: 20px;
    min-width: 250px;
    min-height: 100px;
    flex-direction: column;
`

export const Instruction = styled.p`
    color: #FFFFFF;
    font-family: 'Orbitron', sans-serif;
    float: left;
    margin: 0;
`;

export const CloseX = styled.p`
    color: #000000;
    font-family: 'Orbitron', sans-serif;
    float: right;
    margin: 0;
    position: fixed;
    top: 2%;
    left: 90%;
    font-size: 2em;
    cursor: pointer;
`;