import { useEffect, useState } from "react";
import "./App.css";
import MemoryCard from "./components/MemoryCard";

const cardImages = [
  { src: "img/arsenal.png", matched: false },
  { src: "img/aston_villa.png", matched: false },
  { src: "img/bournemouth.png", matched: false },
  { src: "img/chelsea.png", matched: false },
  { src: "img/crystal_palace.png", matched: false },
  { src: "img/everton.png", matched: false },
  { src: "img/leicester_city.png", matched: false },
  { src: "img/liverpool.png", matched: false },
  { src: "img/manchester_city.png", matched: false },
  { src: "img/manchester_united.png", matched: false },
  { src: "img/newcastle_united.png", matched: false },
  { src: "img/norwich_city.png", matched: false },
  { src: "img/southampton.png", matched: false },
  { src: "img/stoke_city.png", matched: false },
  { src: "img/sunderland.png", matched: false },
  { src: "img/swansea_city.png", matched: false },
  { src: "img/tottenham_hotspur.png", matched: false },
  { src: "img/watford.png", matched: false },
  { src: "img/westbrom.png", matched: false },
  { src: "img/westham.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const newMemoryGame = (numberOfCards) => {
    const cardImagesSubset = [...cardImages]
      .sort(() => Math.random() - 0.5)
      .splice(0, numberOfCards);

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
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices and increase turns
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      <h1>Online Card Games</h1>
      <button onClick={() => newMemoryGame(6)}>New Memory Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <MemoryCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
