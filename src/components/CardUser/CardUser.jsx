import { CardContainer, UserCard, UserNameP } from "./Styles";

export default function Card({ name, num }) {
  

  return (
    <CardContainer>
        <UserNameP>{name}</UserNameP>
        <UserCard>{num}</UserCard>
    </CardContainer>
  );
}