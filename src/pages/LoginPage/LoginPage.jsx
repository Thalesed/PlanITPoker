import { useState } from "react";
import { EnterRoomModal, LoginButton, LoginTextSpace, CreateRoomModal, ErrorBox} from "../../components";
import { LoginContainer, Instruction } from "./Styles";
import { useCreateUser } from "../../hooks/querys/user";


export default function LoginPage() {
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isEnterModalVisible, setIsEnterModalVisible] = useState(false);
  const [errorText, setErrorText] = useState(null);
  

  const { mutate: createUser } = useCreateUser({
    onSuccess: () => {
    },
    onError: (err) => setErrorText(err),
  });

  function toggleEnterModal() {
    const userName = document.getElementById("user-name").value;
    if(!document.getElementById("user-name").value){
      setErrorText("Nome é campo obrigatório");
    }else{
      createUser({
        "name":userName
      });
      setIsEnterModalVisible(prevState => !prevState);
    }
  }
  function toggleCreateModal() {
    const userName = document.getElementById("user-name").value;
    if(!userName){
      setErrorText("Nome é campo obrigatório");
    }else{
      createUser({
        "name":userName
      });
      setIsCreateModalVisible(prevState => !prevState);
    }  }
  return (
    <LoginContainer>
      <ErrorBox text={ errorText } modalDisplay={ errorText ? "flex" : "none" } closeModal={() => { setErrorText(null) }}></ErrorBox>
      <CreateRoomModal id="enter-room" modalDisplay={isCreateModalVisible ? "flex" : "none" } closeModal={() => { setIsCreateModalVisible(false) }}/>
      <EnterRoomModal id="enter-room" modalDisplay={isEnterModalVisible ? "flex" : "none" } closeModal={() => { setIsEnterModalVisible(false) }}/>
      <Instruction>Nome *</Instruction>
      <LoginTextSpace id={"user-name"} placeHolder={"Thales"} />
      <Instruction>Status</Instruction>
      <LoginTextSpace id={"user-status"} placeHolder={"Melhor Consultor"} />
      <LoginButton text="Criar nova sala" onClickFunction={toggleCreateModal} />
      <LoginButton text="Entrar em sala existente" onClickFunction={toggleEnterModal} />
    </LoginContainer>
  );
}



