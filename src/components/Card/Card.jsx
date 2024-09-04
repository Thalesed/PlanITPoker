import { useState } from "react";
import { CardContainer } from "./Styles";

export default function Card({ number, id, onClickFunction}) {

  const [isSelected, setIsSelected] = useState(false);

  function selectCard(){
    const numberCards = document.querySelectorAll(".number-card");
    numberCards.forEach((card) => {
        card.style.backgroundColor = "#222222";
        card.style.color = "gold";
    })
    if(!isSelected){
      setIsSelected(true);
      const theCard = document.getElementById(`${id}-${number}`);
      theCard.style.backgroundColor = "gold";
      theCard.style.color = "#222222";
    }else{
      setIsSelected(false);
    }
  }
  

  return (
    <CardContainer id={`${id}-${number}`} className="number-card" value={number} onClick={() => {onClickFunction(); selectCard()}}>
        { number }
    </CardContainer>
  );
}
