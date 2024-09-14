import styled from "styled-components";

export const TableContainer = styled.div`
position: relativ;
 background-color: #2A2A2A;
  border: solid 1px gold;
  border-radius: 10px;
  width: 810px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 60%;
    padding: 15px;
    height: 380px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const CenterLogo = styled.img`
  width: 7%;
  height: auto;
  
  @media (max-width: 768px) {
    width: 10%;
  }

  @media (max-width: 480px) {
    width: 15%;
  }
`;
