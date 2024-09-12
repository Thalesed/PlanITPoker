import { useState, useEffect } from "react";
import { Table, Card, CardUser, ManageButton } from "../../components";
import { ContainerCards, LeftCards, RightCards, Link, Text, CodeLabel, TheTableContainer, LeftTable, TopTable, RightTable, BottomTable, NameLabel} from "./Styles";
import { useParams } from 'react-router-dom';
import { useGetRoom, useShowVotes } from "../../hooks/querys/room";
import { useGetUsers, useVote } from "../../hooks/querys/user";
import ErrorBox from "../../components/ErrorBox/ErrorBox";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/auth";

export default function MainPage() {
  const [errorText, setErrorText] = useState(null);
  const [fibonacci, setFibonacci] = useState([0, 1, 2, 3, 4, 5]);
  const userType = useAuthStore((state) => state?.auth?.user?.type);
  const userID = useAuthStore((state) => state?.auth?.user?._id);
  const { code } = useParams();
  const navigate = useNavigate();
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);
  const [top, setTop] = useState([]);
  const [bottom, setBottom] = useState([]);
  const [roomName, setRoomName] = useState(null);

  const cardSuits = [
    '\u{2660}', 
    '\u{2665}', 
    '\u{2666}', 
    '\u{2663}'  
  ];

  const [canShow, setCanShow] = useState(false);
  const [canShowText, setCanShowText] = useState("Show");
  const [room, setRoom] = useState(null);

  const {
    data: getRoom,
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
    onSuccess: () => {
      if(room?.users){
        setUsers(room.users);
      }
    },
    refetchInterval: 0, 
    staleTime: 0,
  });

  const { mutate: vote } = useVote({
    onError: (err) => {
      console.log(err);
    },
    onSuccess: () => {
    },
  });

  const { mutate: showVotes } = useShowVotes({
    onError: (err) => {
      console.log(err);
    },
    onSuccess: () => {
    },
  });

  const [users, setUsers] = useState(null);
  const [avarage, setAvarage] = useState(0);
  const [median, setMedian] = useState(0);
  const [mode, setMode] = useState(0);

  function calculateAverageVote() {
    if(room){
      let totalVotes = 0;
      let count = 0;
    
      room.users.forEach(user => {
        if (user.vote !== undefined && user.vote !== null) {
          totalVotes += user.vote;
          count += 1;
        }
      });
      setAvarage(totalVotes / count);
  }
  
  }

  function calculateModeVote() {
    if (room) {
        const votes = room.users
            .map(user => user.vote)
            .filter(vote => vote !== undefined && vote !== null); 

        if (votes.length === 0) {
            setMode(null); 
            return;
        }

        const frequency = {};
        let maxFrequency = 0;
        let mode = null;

        votes.forEach(vote => {
            frequency[vote] = (frequency[vote] || 0) + 1;
            if (frequency[vote] > maxFrequency) {
                maxFrequency = frequency[vote];
                mode = vote;
            }
        });

        setMode(mode);
    }
}


  function calculateMedianVote() {
    if (room) {
        const votes = room.users
            .map(user => user.vote)
            .filter(vote => vote !== undefined && vote !== null); 

        if (votes.length === 0) {
            setMedian(0); 
            return;
        }

        votes.sort((a, b) => a - b);

        const middle = Math.floor(votes.length / 2);

        if (votes.length % 2 !== 0) {
            setMedian(votes[middle]);
        } else {
            setMedian((votes[middle - 1] + votes[middle]) / 2);
        }
    }
}

function updateData(){
  if(room?.users){
    setUsers(room.users);
  }
  refetch().then(() =>{
      setRoom(getRoom);
  
    if (isSuccess && room) {
      generateFibonacci();
      if(room.users){
        setUsers(room.users);
      }
      setLeft(users.slice(0, 3));
      setTop(users.slice(3, 9));
      setRight(users.slice(9, 12));
      setBottom(users.slice(12));
      calculateAverageVote();
      calculateMedianVote();
      calculateModeVote();
      setCanShow(room.show);
    }

    if (isError) {
      setErrorText("Impossível conectar à sala");
    }

    });
  }
  

  useEffect(() => {
    if(room){
      setUsers(room.users);
    }
    updateData();
    if(!roomName){
      setRoomName(room?.name);
    }

  }, [isRoomLoading, room]);

  useEffect(() => {
    
    const interval = setInterval(() => {
      refetch();
      updateData();
    }, 400);
    
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    
    const interval = setInterval(() => {
      if(!(room?.users)){
        window.location.reload();
      }      
      }, 5500);
    
    
    return () => clearInterval(interval);
  }, []);

  function generateFibonacci() {
    const fibSequence = [0, 1];

    for (let i = 2; i < 12; i++) {
        const nextNumber = fibSequence[i - 1] + fibSequence[i - 2];
        fibSequence.push(nextNumber);
    }
    
    setFibonacci(fibSequence);
  }

  function doVote(num){
    setUsers(room?.users);
    vote({id: userID, body: {"vote": num}});
    
    updateData();
  }

  return (
    <>
    <ErrorBox text={ errorText } modalDisplay={ errorText ? "flex" : "none" } closeModal={() => { setErrorText(null) ; navigate("/");}}></ErrorBox>
    <NameLabel>Sala: { roomName }</NameLabel>
    <CodeLabel>Código: { code }</CodeLabel>
    <LeftCards>
      <Link href={"https://www.notion.so/notioncpe/Vote-consciente-PlanITpoker-51e9e707248e41938de22d8948afa4b5?pvs=4"}>Vote consciente</Link>
      <Link href={"https://www.notion.so/notioncpe/b8bb7797d91e4530b25b96713fe3a9b9?v=691ba4967d4449c5ad907fdfa39a372d"}>Quadro Scrum</Link>
    </LeftCards>
    <RightCards>
      {canShow ? (
      <>
        <Text>Média: { avarage }</Text>
        <Text>Mediana: { median }</Text>
        <Text>Moda: { mode }</Text>
      </>
      ) :(
        <>
        <Text>Média: - </Text>
        <Text>Mediana: -</Text>
        <Text>Moda: -</Text>
      </>
      ) }
    </RightCards>

     
          <TheTableContainer>
            <LeftTable>
              {left && 
              left.map((user, index) => (
                canShow ? (
                <CardUser name={user.name} num={user.vote} key={index}/>
                ) :( 
                <CardUser name={user.name} num={cardSuits[index] }key={index}/>
                )
              )) }
            </LeftTable>
            <Table />
            <TopTable>
            {top && top.map((user, index) => (
              canShow ? (
              <CardUser name={user.name} num={user.vote} key={index}/>
              )
              :(
                <CardUser name={user.name} num={cardSuits[index]} key={index}/>
              )
              ))}
            </TopTable>
            <RightTable>
            {right && right.map((user, index) => (
              canShow ? (
              <CardUser name={user.name} num={user.vote} key={index}/>
              ):(
                <CardUser name={user.name} num={cardSuits[index]} key={index}/>
              )
              ))}
            </RightTable>
            <BottomTable>
            {bottom && bottom.map((user, index) => (
              canShow ? (
              <CardUser name={user.name} num={user.vote} key={index}/>
              ):(
              <CardUser name={user.name} num={cardSuits[index]} key={index}/>
              )
              ))}
            </BottomTable>
          </TheTableContainer>

      
      
      <ContainerCards>
      
      {fibonacci.map((value, index) =>
      (
        <Card number={value} key={index} id="number-card" onClickFunction={() => {doVote(value)}}/>
      ))} 
      { userType &&
      <ManageButton text={canShowText} onClickFunction={() => {
        showVotes({code: code, state: !canShow});
        setCanShow((prevState) => !prevState);
        setCanShowText((prevState) => prevState === "Show" ? "Hide" : "Show");
        updateData();
      } }/>
      }
      </ContainerCards>
    </>
  );
}


