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

    &:hover{
        transform: scale(1.2);
        color: #222222;
        background-color: gold;
    }
    &:active{
        color: #222222;
        background-color: gold;
    }
`;