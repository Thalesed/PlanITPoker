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

export const NumberInput = styled.input`
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

`;

export const Instruction = styled.p`
    color: #232323;
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