import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import CastleSinglePlayerGame from "../components/CastleSinglePlayerGame";

const CastleSinglePlayer = () => {
  const [castleGame, setCastleGame] = useState(null);
  const [winner, setWinner] = useState(false);
  const { gameType } = useParams();
  const { width, height } = useWindowSize();

  const getNumberOfAIFromGameType = () => {
    switch (gameType) {
      case "one-ai":
        return 1;
      case "two-ai":
        return 2;
      case "three-ai":
        return 3;
      case "four-ai":
        return 4;
      default:
        return 1;
    }
  };

  const newCastleGame = () => {
    setWinner(false);
    setCastleGame({
      numberOfAI: getNumberOfAIFromGameType(),
    });
  };

  const handleWinner = () => {
    setWinner(true);
  };

  useEffect(() => {
    newCastleGame();
  }, []);

  return (
    <div>
      {winner ? <Confetti width={width} height={height} /> : null}
      <h1>Castle</h1>
      <button id="btnRestartCastleGame" onClick={() => newCastleGame()}>
        New Game
      </button>
      <Link to="/cards/home">
        <button id="btnReturnHome">Return Home</button>
      </Link>
      {castleGame ? (
        <CastleSinglePlayerGame
          numberOfAI={castleGame.numberOfAI}
          handleWinner={handleWinner}
        />
      ) : null}
    </div>
  );
};

export default CastleSinglePlayer;
