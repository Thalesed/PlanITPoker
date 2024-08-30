import { useState, useEffect } from "react";
import { Table, Card } from "../../components";
import { ContainerCards } from "./Styles";

export default function Home() {
  const [fibonacci, setFibonacci] = useState([0, 1, 2, 3, 4, 5]);

  function generateFibonacci() {
    const fibSequence = [0, 1];

    for (let i = 2; i < 12; i++) {
        const nextNumber = fibSequence[i - 1] + fibSequence[i - 2];
        fibSequence.push(nextNumber);
    }
    console.log(fibSequence);
    
    setFibonacci(fibSequence);
  }

  useEffect(() => {
    generateFibonacci();
  }, []);

  return (
    <>
      <Table/>

      <ContainerCards>
      {fibonacci.map((value, index) =>
      (
        <Card number={value} key={index}/>
      ))} 
      </ContainerCards>
    </>
  );
}


