import styled from "styled-components";

export const CardContainer = styled.div`
  position: relativ;
  width: 50px;
  height: 30px;
  text-align: center;
  justify-content: center;
  margin-bottom: 0px;
  margin: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 40px;
    height: 25px;
    margin: 35px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 20px;
    margin: 15px;
    margin-top: 25px;
  }
`;

export const UserCard = styled.div`
  border: 1px dashed #E1E1E1;
  min-height: 50px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #C62828;
  color: #FFFFFF;
  font-size: 1.2em;
  font-weight: bold;
  position: relativ;

  @media (max-width: 768px) {
    min-height: 40px;
    width: 28px;
    font-size: 1em;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    min-height: 35px;
    width: 25px;
    font-size: 0.9em;
  }
`;

export const UserNameP = styled.p`
  color: #E1E1E1;
  text-align: center;
  margin: 0;
  margin-bottom: 6px;
  position: relativ;

  @media (max-width: 768px) {
    font-size: 0.9em;
    margin: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    margin-bottom: 4px;
  }
`;
