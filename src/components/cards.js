import { render } from "@testing-library/react";
import React from "react";


export default function Cards(props) {

  function getCards() {

    function getRandomArray(cardsArray) {
      const randomArray = [];
      while (cardsArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * cardsArray.length);
        const currentCard = cardsArray.splice(randomIndex,1);
        randomArray.push(...currentCard);
      }
      return randomArray;
    }

    const cardsArray = 
      ['🥳','😎','😍','😝','🤪','😫','😤','🥵','😱','🤗','🤮','😈']
      .map(
        (card, index) => {
          return {
            id: index,
            value: card,
          }
        }
      );

    const renderCards = () => {
      return getRandomArray(cardsArray).map(
        (card) => {
          return (
            <div className="memo-card" key = { card.id } id = { card.id } onClick = { props.handler }>
              { card.value }
            </div>
          );
        }
      )
    };
    
    return renderCards();
  }

  return (
    <div className="cards">
      { getCards() }
    </div>
  );
}