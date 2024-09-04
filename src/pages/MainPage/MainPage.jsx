import { useState, useEffect } from "react";
import { Table, Card } from "../../components";
import { ContainerCards, LeftCards, RightCards, Link, Text, CodeLabel} from "./Styles";
import { useParams } from 'react-router-dom';
import { useGetRoom } from "../../hooks/querys/room";
import { useVote } from "../../hooks/querys/user";
import ErrorBox from "../../components/ErrorBox/ErrorBox";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/auth";

export default function MainPage() {
  const [errorText, setErrorText] = useState(null);
  const [fibonacci, setFibonacci] = useState([0, 1, 2, 3, 4, 5]);
  const userID = useAuthStore((state) => state?.auth?.user?._id);
  const { code } = useParams();
  const navigate = useNavigate();

  const {
    data: room,
    isLoading: isRoomLoading,
    isSuccess,
    isError,
    error,
  } = useGetRoom({
    code,
    onError: (err) => {
      console.log("Erro ao buscar a sala:", err);
      navigate("/");
    },
  });

  const { mutate: vote } = useVote({
    onError: (err) => {
      console.log(err);
    },
    onSuccess: () => {
    },
  });

  useEffect(() => {
    if (isSuccess && room) {
      generateFibonacci();
    }

    if (isError) {
      setErrorText("Impossível conectar à sala");
    }
  }, [isRoomLoading, isSuccess, isError, room]);


  function generateFibonacci() {
    const fibSequence = [0, 1];

    for (let i = 2; i < 12; i++) {
        const nextNumber = fibSequence[i - 1] + fibSequence[i - 2];
        fibSequence.push(nextNumber);
    }
    
    setFibonacci(fibSequence);
  }

  function doVote(num){
    vote({id: userID, body: {"vote": num}});
  }

  return (
    <>
    <ErrorBox text={ errorText } modalDisplay={ errorText ? "flex" : "none" } closeModal={() => { setErrorText(null) ; navigate("/");}}></ErrorBox>
    <CodeLabel>Código: { code }</CodeLabel>
    <LeftCards>
      <Link href={"https://www.notion.so/notioncpe/Vote-consciente-PlanITpoker-51e9e707248e41938de22d8948afa4b5?pvs=4"}>Vote consciente</Link>
    </LeftCards>
    <RightCards>
      <Text>Média: </Text>
      <Text>Mediana: </Text>
      <Text>Moda: </Text>
    </RightCards>
      <Table/>

      <ContainerCards>
      {fibonacci.map((value, index) =>
      (
        <Card number={value} key={index} id="number-card" onClickFunction={() => {doVote(value)}}/>
      ))} 
      </ContainerCards>
    </>
  );
}


