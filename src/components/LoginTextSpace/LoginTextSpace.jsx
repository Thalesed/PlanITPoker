import PropTypes from "prop-types";
import { Space } from "./Styles";

export default function LoginTextSpace({ placeHolder, id, onChangeFunction }) {
  return (
    <Space id={id} placeholder={placeHolder} onChange={onChangeFunction} />
  );
}

LoginTextSpace.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
};
