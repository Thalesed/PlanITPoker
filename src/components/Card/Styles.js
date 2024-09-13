import styled from "styled-components";

export const CardContainer = styled.div`
    color: gold;
    border: solid 1px #FFFFFF;
    width: 83px;
    height: 115px;
    border-radius: 10px;
    margin: 10px;
    text-align: center;
    font-size: 1.8em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        color: #222222;
        background-color: gold;
    }

    &:active {
        color: #222222;
        background-color: gold;
    }

    @media (max-width: 1024px) {
        width: 75px;
        height: 105px;
        font-size: 1.6em;
    }

    @media (max-width: 768px) {
        width: 70px;
        height: 95px;
        font-size: 1.4em;
    }

    @media (max-width: 480px) {
        width: 60px;
        height: 85px;
        font-size: 1.2em;
        margin: 8px;

        &:hover {
            transform: scale(1.1);
        }
    }

    @media (max-width: 320px) {
        width: 50px;
        height: 75px;
        font-size: 1em;
        margin: 6px;
    }
`;
