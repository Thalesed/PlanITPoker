import styled from "styled-components";

export const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-top: 180px;

    @media (max-width: 768px) {
        margin-top: 140px;
        flex-direction: row;
    }
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

    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        font-size: 1em;
        margin: 10px 0;
    }
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

    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        font-size: 1em;
        margin: 10px 0;
    }
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
    @media (max-width: 768px) {
        margin-right: 9px;
    }
`;

export const Text = styled.p`
    @media (max-width: 768px) {
        margin-right: 9px;
    }
`;

export const NameLabel = styled.h1`
    color: #D7D7D7;
    text-align: center; 
    font-size: 1.5em;
    margin-bottom: 25px;

    @media (max-width: 768px) {
        font-size: 1.2em;
        margin-bottom: 12px;
    }
`;

export const CodeLabel = styled.h2`
    color: #D7D7D7;
    text-align: center;
    font-size: 1.3em; 

    @media (max-width: 768px) {
        font-size: 1.1em;
    }
`;

export const TheTableContainer = styled.div`
    background-color: transparent;
    width: 1000px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    top: 90px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        top: 50px;
        flex-direction: column;
    }
`;
export const LeftTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    @media (max-width: 768px) {
        position: absolute;
        flex-direction: row;
        top: -16%;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        margin-bottom: 36px;
        height: auto;
    }

    
`;

export const TopTable = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-75%);
    margin-bottom: 20px;

    @media (max-width: 768px) {
        position: absolute;
        flex-direction: column;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        width: 31px;
        height: 60%;
    }
`;

export const RightTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;

    @media (max-width: 768px) {
        position: absolute;
        flex-direction: row;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        margin-top: 4px;
        height: auto;
    }
    
`;

export const BottomTable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(60%);

    @media (max-width: 768px) {
        position: absolute;
        flex-direction: column;
        left: 84%;
        top: 50%;
        transform: translateY(-50%);
        width: auto;
        height: 50%;
    }

    
`;
