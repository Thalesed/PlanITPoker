import styled from "styled-components";

export const ContainerCards = styled.div`
    display: flex;
    text-align: center;
    self-align: center;
    justify-content: center;
    flex-direction: row; 
    width: 100%;   
    margin-top: 50px;
`;

export const LeftCards = styled.div`
    display: flex;
    text-align: center;
    self-align: left;
    justify-content: center;
    float: left;
    left: 0;
    flex-direction: row; 
    width: 10%;   
    margin-top: 50px;
    background-color: #262626;
    color: gold;
    margin: 15px;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2em;
`;


export const RightCards = styled.div`
    display: flex;
    text-align: center;
    self-align: right;
    justify-content: center;
    float: right;
    right: 0;
    flex-direction: column; 
    width: 10%;   
    margin-top: 50px;
    background-color: 262626;
    color: gold;
    margin: 15px;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.4em;
`;

export const Link = styled.a`

    color: inherit;
    font-family: inherit;
     &:visited {
        color: inherit; 
    }

    &:hover {
        color: red;
    }

    &:active {
        color: inherit; 
    }
`;

export const Text = styled.p`

`

export const CodeLabel = styled.h2`
    color: #D7D7D7;
    display: flex;
    justify-content: center; 
    margin: 0 auto;
    text-align: center; 
`;