import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Card Games</h1>
      <Link to="/cards/memory/twelve-card-game">
        <button id="btnMemoryGameTwelve">Memory Game (12 Cards)</button>
      </Link>
      <Link to="/cards/memory/twenty-card-game">
        <button id="btnMemoryGameTwenty">Memory Game (20 Cards)</button>
      </Link>
      <Link to="/cards/memory/forty-card-game">
        <button id="btnMemoryGameForty">Memory Game (40 Cards)</button>
      </Link>
      <Link to="/cards/castle/single-player/one-ai">
        <button id="btnCastleSinglePlayerOneAI">
          Castle Single Player (1 AI)
        </button>
      </Link>
    </div>
  );
};

export default Home;
