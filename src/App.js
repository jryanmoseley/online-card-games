import { useState } from "react";
import "./App.css";
import MemoryCard from "./components/MemoryCard";

const cardImages = [
  { src: "img/arsenal.png" },
  { src: "img/aston_villa.png" },
  { src: "img/bournemouth.png" },
  { src: "img/chelsea.png" },
  { src: "img/crystal_palace.png" },
  { src: "img/everton.png" },
  { src: "img/leicester_city.png" },
  { src: "img/liverpool.png" },
  { src: "img/manchester_city.png" },
  { src: "img/manchester_united.png" },
  { src: "img/newcastle_united.png" },
  { src: "img/norwich_city.png" },
  { src: "img/southampton.png" },
  { src: "img/stoke_city.png" },
  { src: "img/sunderland.png" },
  { src: "img/swansea_city.png" },
  { src: "img/tottenham_hotspur.png" },
  { src: "img/watford.png" },
  { src: "img/westbrom.png" },
  { src: "img/westham.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

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

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Online Card Games</h1>
      <button onClick={() => newMemoryGame(6)}>New Memory Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <MemoryCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
