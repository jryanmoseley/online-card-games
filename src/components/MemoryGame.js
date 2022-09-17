import { useEffect, useState } from "react";
import "./MemoryGame.css";
import MemoryCard from "./MemoryCard";

const cardImages = [
  { src: "/cards/img/arsenal.png", matched: false },
  { src: "/cards/img/aston_villa.png", matched: false },
  { src: "/cards/img/bournemouth.png", matched: false },
  { src: "/cards/img/chelsea.png", matched: false },
  { src: "/cards/img/crystal_palace.png", matched: false },
  { src: "/cards/img/everton.png", matched: false },
  { src: "/cards/img/leicester_city.png", matched: false },
  { src: "/cards/img/liverpool.png", matched: false },
  { src: "/cards/img/manchester_city.png", matched: false },
  { src: "/cards/img/manchester_united.png", matched: false },
  { src: "/cards/img/newcastle_united.png", matched: false },
  { src: "/cards/img/norwich_city.png", matched: false },
  { src: "/cards/img/southampton.png", matched: false },
  { src: "/cards/img/stoke_city.png", matched: false },
  { src: "/cards/img/sunderland.png", matched: false },
  { src: "/cards/img/swansea_city.png", matched: false },
  { src: "/cards/img/tottenham_hotspur.png", matched: false },
  { src: "/cards/img/watford.png", matched: false },
  { src: "/cards/img/westbrom.png", matched: false },
  { src: "/cards/img/westham.png", matched: false },
];

export default function MemoryGame({ totalNumberOfCards }) {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const getCardGridClassName = () => {
    switch (totalNumberOfCards) {
      case 12:
        return "card-grid-four-columns";
      case 20:
        return "card-grid-five-columns";
      case 30:
        return "card-grid-six-columns";
      case 40:
        return "card-grid-eight-columns";
      default:
        return "card-grid-four-columns";
    }
  };

  const newMemoryGame = (totalNumberOfCards) => {
    const cardImagesSubset = [...cardImages]
      .sort(() => Math.random() - 0.5)
      .splice(0, totalNumberOfCards / 2);

    const shuffledCards = [...cardImagesSubset, ...cardImagesSubset]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare the two cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices and increase turns
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    newMemoryGame(totalNumberOfCards);
  }, [totalNumberOfCards]);

  return (
    <div>
      <p>Turns: {turns}</p>
      <div className={getCardGridClassName()}>
        {cards.map((card) => (
          <MemoryCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}
