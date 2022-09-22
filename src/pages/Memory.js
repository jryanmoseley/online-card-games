import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import MemoryGame from "../components/MemoryGame";

const Memory = () => {
  const [memoryGames, setMemoryGame] = useState([]);
  const [winner, setWinner] = useState(false);
  const { gameType } = useParams();
  const { width, height } = useWindowSize();

  const getTotalCardsFromGameType = () => {
    switch (gameType) {
      case "twelve-card-game":
        return 12;
      case "twenty-card-game":
        return 20;
      case "forty-card-game":
        return 40;
      default:
        return 12;
    }
  };

  const newMemoryGame = () => {
    setWinner(false);
    setMemoryGame([
      { id: Math.random(), totalNumberOfCards: getTotalCardsFromGameType() },
    ]);
  };

  const handleWinner = () => {
    setWinner(true);
  };

  useEffect(() => {
    newMemoryGame();
  }, [gameType]);

  return (
    <div>
      {winner ? <Confetti width={width} height={height} /> : null}
      <h1>Memory</h1>
      <button id="btnRestartMemoryGame" onClick={() => newMemoryGame()}>
        New Game
      </button>
      <Link to="/cards/home">
        <button id="btnMemoryReturnHome">Return Home</button>
      </Link>
      {memoryGames.map((game) => (
        <MemoryGame
          key={game.id}
          totalNumberOfCards={game.totalNumberOfCards}
          handleWinner={handleWinner}
        />
      ))}
    </div>
  );
};

export default Memory;
