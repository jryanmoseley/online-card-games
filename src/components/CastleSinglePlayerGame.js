import { useEffect, useState } from "react";
import "./CastleSinglePlayerGame.css";

export default function CastleSinglePlayerGame({ numberOfAI }) {
  const [cards, setCards] = useState([]);

  const newGame = (numberOfAI) => {
    // const cardImagesSubset = [...cardImages]
    //   .sort(() => Math.random() - 0.5)
    //   .splice(0, totalNumberOfCards / 2);
    // const shuffledCards = [...cardImagesSubset, ...cardImagesSubset]
    //   .sort(() => Math.random() - 0.5)
    //   .map((card) => ({ ...card, id: Math.random() }));
    // setCards(shuffledCards);
    // setTurns(0);
    // setWinner(false);
  };

  useEffect(() => {
    newGame(numberOfAI);
  }, [numberOfAI]);

  // useEffect(() => {
  //   if (cards.length > 0) {
  //     if (cards.every((card) => card.matched === true)) {
  //       setWinner(true);
  //     }
  //   }
  // }, [cards]);

  return (
    <div>
      <div>New Card Game</div>
    </div>
  );
}
