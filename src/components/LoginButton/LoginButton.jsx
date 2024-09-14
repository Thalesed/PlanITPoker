import PropTypes from "prop-types";
import { Button } from "./Styles";

export default function LoginButton({ text, onClickFunction }) {
  return (
    <Button onClick={onClickFunction}>
      {text}
    </Button>
  );
}

LoginButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired,
};
