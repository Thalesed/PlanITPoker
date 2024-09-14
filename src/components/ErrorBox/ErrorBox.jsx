import PropTypes from "prop-types";
import { ErrorMessage, ModelContainer, CloseX } from "./Styles";

export default function ErrorBox({ text, modalDisplay, closeModal }) {
  return (
    <ModelContainer style={{ display: modalDisplay }}>
      <CloseX onClick={closeModal}>X</CloseX>
      <ErrorMessage>{text}</ErrorMessage>
    </ModelContainer>
  );
}

ErrorBox.propTypes = {
  text: PropTypes.string.isRequired,
  modalDisplay: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  closeModal: PropTypes.func.isRequired,
};
