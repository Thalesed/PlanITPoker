import LoginButton from "../LoginButton/LoginButton";
import { ErrorMessage, ModelContainer, CloseX } from "./Styles";

export default function ErrorBox({ text, modalDisplay, closeModal }) {
  
  return (
    <ModelContainer style={{display: modalDisplay}}>
        <CloseX onClick={closeModal}>X</CloseX>
        <ErrorMessage>{ text }</ErrorMessage>
    </ModelContainer>
  );
}
