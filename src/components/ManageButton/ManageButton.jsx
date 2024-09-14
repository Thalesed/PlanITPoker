import PropTypes from "prop-types";
import { Button } from "./Styles";

export default function ManageButton({ text, onClickFunction }) {
  return (
    <Button onClick={onClickFunction}>
      {text}
    </Button>
  );
}

ManageButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired,
};
