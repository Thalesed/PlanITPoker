import styled from "styled-components";

export const ContainerCards = styled.div`
    display: flex;
    text-align: center;
    self-align: center;
    justify-content: center;
    flex-direction: row; 
    width: 100%;   
    margin-top: 180px;
`;

export const LeftCards = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    self-align: left;
    justify-content: center;
    float: left;
    left: 0;
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
    margin-bottom: 12px;
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

export const TheTableContainer = styled.div`
    background-color: transparent;
    border: none;
    width: 1000px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;  
    top: 90px;
`;

export const LeftTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 100%;
    border: none;
    position: absolute;
    left: 0;
    top: 0;
`;

export const TopTable = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-75%);
`;

export const RightTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 100%;
    border: none;
    position: absolute;
    right: 0;
    top: 0;
`;

export const BottomTable = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    border: none;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(60%);
`;