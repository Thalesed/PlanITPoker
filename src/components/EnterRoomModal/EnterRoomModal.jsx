import LoginButton from "../LoginButton/LoginButton";
import LoginTextSpace from "../LoginTextSpace/LoginTextSpace";
import { Instruction, ModelContainer, CloseX } from "./Styles";
import { useGetRoom } from "../../hooks/querys/room";
import { useAddUser } from "../../hooks/querys/room";
import ErrorBox from "../ErrorBox/ErrorBox";

import useAuthStore from "../../stores/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EnterRoomModel({ modalDisplay, closeModal }) {

  const [errorText, setErrorText] = useState(null);
  const userID = useAuthStore((state) => state?.auth?.user?._id);
  const navigate = useNavigate();
  const [code, setCode] = useState(null);
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  function getCode(){
    const theCode = document.getElementById("room-code").value;
    setCode(theCode);
  }

  const {
    data: room,
    isLoading: isRoomLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetRoom({
    code,
    onError: (err) => {
      console.log("Erro ao buscar a sala:", err);
      navigate("/");
    },
  });

  const { mutate: addUser } = useAddUser({
    onSuccess: () => {
      
    },
    onError: (err) => {
      console.log(err);
    },
  });
  
  function enterRoom(){
    if (!code) {
      setErrorText("Digite o código da sala");
    } else if (!room) {
      setErrorText("Não foi possível encontrar a sala");
    } else {
      addUser({ code: room.code, idUser: userID });
      refetch().then(() => {
        navigate(`/room/${room.code}`);
      });
    }
  }
  
  
  return (
    <ModelContainer style={{display: modalDisplay}}>
      <ErrorBox text={ errorText } modalDisplay={ errorText ? "flex" : "none" } closeModal={() => { setErrorText(null) }}></ErrorBox>
        <CloseX onClick={closeModal}>X</CloseX>
        <Instruction> Código da Sala</Instruction>
        <LoginTextSpace id="room-code" placeHolder={"ROOM CODE"} onChangeFunction={getCode} ></LoginTextSpace>
        <LoginButton text={"ENTRAR"} onClickFunction={() => {enterRoom(); } }></LoginButton>
    </ModelContainer>
  );
}
