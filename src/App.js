import { useState } from "react";
import "./App.css";
import MemoryGame from "./components/MemoryGame";
import CastleSinglePlayerGame from "./components/CastleSinglePlayerGame";

function App() {
  const [memoryGames, setMemoryGame] = useState([]);
  const [castleSinglePlayerGames, setCastleSinglePlayerGame] = useState([]);

  const newMemoryGame = (totalNumberOfCards) => {
    setMemoryGame([
      { id: Math.random(), totalNumberOfCards: totalNumberOfCards },
    ]);
  };

  const newCastleSinglePlayer = (numberOfAI) => {
    setCastleSinglePlayerGame([{ id: Math.random(), numberOfAI: numberOfAI }]);
  };

  return (
    <div className="App">
      <h1>Card Games</h1>
      <button id="btnMemoryGameTwelve" onClick={() => newMemoryGame(12)}>
        Memory Game (12 Cards)
      </button>
      <button id="btnMemoryGameTwenty" onClick={() => newMemoryGame(20)}>
        Memory Game (20 Cards)
      </button>
      <button id="btnMemoryGameForty" onClick={() => newMemoryGame(40)}>
        Memory Game (40 Cards)
      </button>
      <button
        id="btnCastleGameSinglePlayer"
        onClick={() => newCastleSinglePlayer(1)}
      >
        Castle Single Player (1 AI)
      </button>
      {memoryGames.map((game) => (
        <MemoryGame
          key={game.id}
          totalNumberOfCards={game.totalNumberOfCards}
        />
      ))}

      {castleSinglePlayerGames.map((game) => (
        <CastleSinglePlayerGame key={game.id} numberOfAI={game.numberOfAI} />
      ))}
    </div>
  );
}

export default App;
