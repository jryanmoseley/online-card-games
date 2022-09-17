import { useState } from "react";
import "./App.css";
import MemoryGame from "./components/MemoryGame";

function App() {
  const [memoryGames, setMemoryGame] = useState([]);

  const newMemoryGame = (totalNumberOfCards) => {
    setMemoryGame([
      { id: Math.random(), totalNumberOfCards: totalNumberOfCards },
    ]);
  };

  return (
    <div className="App">
      <h1>Online Card Games</h1>
      <button onClick={() => newMemoryGame(12)}>Memory Game (12 Cards)</button>
      <button onClick={() => newMemoryGame(20)}>Memory Game (20 Cards)</button>
      <button onClick={() => newMemoryGame(40)}>Memory Game (40 Cards)</button>
      {memoryGames.map((game) => (
        <MemoryGame
          key={game.id}
          totalNumberOfCards={game.totalNumberOfCards}
        />
      ))}
    </div>
  );
}

export default App;
