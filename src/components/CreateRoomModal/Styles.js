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

    @media (max-width: 768px) {
        min-width: 200px;
        min-height: 80px;
        padding: 15px;
        top: 35%;
    }

    @media (max-width: 480px) {
        min-width: 180px;
        min-height: 70px;
        padding: 10px;
        top: 30%;
    }

    @media (max-width: 320px) {
        min-width: 150px;
        min-height: 60px;
        padding: 8px;
        top: 25%;
    }
`;

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

    &:focus {
        border: solid 2px gold;
        border-color: gold;
    }

    @media (max-width: 768px) {
        width: 180px;
        font-size: 1.1em;
    }

    @media (max-width: 480px) {
        width: 160px;
        font-size: 1em;
    }

    @media (max-width: 320px) {
        width: 140px;
        font-size: 0.9em;
    }
`;

export const Instruction = styled.p`
    color: #232323;
    font-family: 'Orbitron', sans-serif;
    float: left;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 0.9em;
    }

    @media (max-width: 480px) {
        font-size: 0.8em;
    }

    @media (max-width: 320px) {
        font-size: 0.7em;
    }
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

    @media (max-width: 768px) {
        font-size: 1.8em;
        left: 85%;
    }

    @media (max-width: 480px) {
        font-size: 1.6em;
        left: 80%;
    }

    @media (max-width: 320px) {
        font-size: 1.4em;
        left: 75%;
    }
`;
