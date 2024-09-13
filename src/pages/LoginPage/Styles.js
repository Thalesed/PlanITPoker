import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh; 
    width: 30%;
    margin-left: 35%;
    text-align: center;
    border: solid 1px gold;
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    @media (max-width: 1024px) {
        width: 40%;
        margin-left: 30%;
    }

    @media (max-width: 768px) {
        width: 50%;
        margin-left: 25%;
    }

    @media (max-width: 480px) {
        width: 70%;
        margin-left: 15%;
        height: 50vh;
    }

    @media (max-width: 320px) {
        width: 90%;
        margin-left: 5%;
        height: 45vh;
    }
`;

export const Instruction = styled.p`
    color: #FFFFFF;
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
