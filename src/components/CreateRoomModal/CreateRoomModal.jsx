import PropTypes from "prop-types";
import LoginButton from "../LoginButton/LoginButton";
import LoginTextSpace from "../LoginTextSpace/LoginTextSpace";
import ErrorBox from "../ErrorBox/ErrorBox";
import { Instruction, ModelContainer, NumberInput, CloseX } from "./Styles";
import { useCreateRoom } from "../../hooks/querys/room";

import useAuthStore from "../../stores/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateRoomModel({ modalDisplay, closeModal }) {
  const [errorText, setErrorText] = useState(null);
  const userID = useAuthStore((state) => state?.auth?.user?._id);
  const navigate = useNavigate();

  const { mutate: createRoom } = useCreateRoom({
    onSuccess: (data) => {
      navigate(`/room/${data.code}`);
    },
    onError: (err) => setErrorText(err),
  });

  function doCreateRoom() {
    const roomName = document.getElementById("room-name").value;
    const max = parseInt(document.getElementById("max-users").value, 10);
    console.log(max);
    if (!roomName || roomName === "") {
      setErrorText("Nome da sala não pode estar vazio");
    } else {
      createRoom({
        name: roomName,
        users: [userID],
        show: false,
        maxUsers: max,
      });
    }
  }

  return (
    <ModelContainer style={{ display: modalDisplay }}>
      <ErrorBox
        text={errorText}
        modalDisplay={errorText ? "flex" : "none"}
        closeModal={() => {
          setErrorText(null);
        }}
      />
      <CloseX onClick={closeModal}>X</CloseX>
      <Instruction>Nome da Sala</Instruction>
      <LoginTextSpace id="room-name" placeHolder={"ROOM NAME"} />
      <Instruction>Limite de membros</Instruction>
      <NumberInput id="max-users" type="number" defaultValue="10" min="1" max="18" />
      <LoginButton text={"CRIAR"} onClickFunction={doCreateRoom} />
    </ModelContainer>
  );
}

CreateRoomModel.propTypes = {
  modalDisplay: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  closeModal: PropTypes.func.isRequired,
};
