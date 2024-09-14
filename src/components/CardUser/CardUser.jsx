import PropTypes from "prop-types";
import { CardContainer, UserCard, UserNameP } from "./Styles";

export default function Card({ name, num }) {
  return (
    <CardContainer>
      <UserNameP>{name}</UserNameP>
      <UserCard>{num}</UserCard>
    </CardContainer>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
