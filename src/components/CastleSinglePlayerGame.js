import { useEffect, useState } from "react";
import "./CastleSinglePlayerGame.css";
import CastleCard from "./CastleCard";

const deck = [
  { src: "/cards/img/playing_cards/two_club.png", value: 2 },
  { src: "/cards/img/playing_cards/two_diamond.png", value: 2 },
  { src: "/cards/img/playing_cards/two_heart.png", value: 2 },
  { src: "/cards/img/playing_cards/two_spade.png", value: 2 },
  { src: "/cards/img/playing_cards/three_club.png", value: 3 },
  { src: "/cards/img/playing_cards/three_diamond.png", value: 3 },
  { src: "/cards/img/playing_cards/three_heart.png", value: 3 },
  { src: "/cards/img/playing_cards/three_spade.png", value: 3 },
  { src: "/cards/img/playing_cards/four_club.png", value: 4 },
  { src: "/cards/img/playing_cards/four_diamond.png", value: 4 },
  { src: "/cards/img/playing_cards/four_heart.png", value: 4 },
  { src: "/cards/img/playing_cards/four_spade.png", value: 4 },
  { src: "/cards/img/playing_cards/five_club.png", value: 5 },
  { src: "/cards/img/playing_cards/five_diamond.png", value: 5 },
  { src: "/cards/img/playing_cards/five_heart.png", value: 5 },
  { src: "/cards/img/playing_cards/five_spade.png", value: 5 },
  { src: "/cards/img/playing_cards/six_club.png", value: 6 },
  { src: "/cards/img/playing_cards/six_diamond.png", value: 6 },
  { src: "/cards/img/playing_cards/six_heart.png", value: 6 },
  { src: "/cards/img/playing_cards/six_spade.png", value: 6 },
  { src: "/cards/img/playing_cards/seven_club.png", value: 7 },
  { src: "/cards/img/playing_cards/seven_diamond.png", value: 7 },
  { src: "/cards/img/playing_cards/seven_heart.png", value: 7 },
  { src: "/cards/img/playing_cards/seven_spade.png", value: 7 },
  { src: "/cards/img/playing_cards/eight_club.png", value: 8 },
  { src: "/cards/img/playing_cards/eight_diamond.png", value: 8 },
  { src: "/cards/img/playing_cards/eight_heart.png", value: 8 },
  { src: "/cards/img/playing_cards/eight_spade.png", value: 8 },
  { src: "/cards/img/playing_cards/nine_club.png", value: 9 },
  { src: "/cards/img/playing_cards/nine_diamond.png", value: 9 },
  { src: "/cards/img/playing_cards/nine_heart.png", value: 9 },
  { src: "/cards/img/playing_cards/nine_spade.png", value: 9 },
  { src: "/cards/img/playing_cards/ten_club.png", value: 10 },
  { src: "/cards/img/playing_cards/ten_diamond.png", value: 10 },
  { src: "/cards/img/playing_cards/ten_heart.png", value: 10 },
  { src: "/cards/img/playing_cards/ten_spade.png", value: 10 },
  { src: "/cards/img/playing_cards/jack_club.png", value: 11 },
  { src: "/cards/img/playing_cards/jack_diamond.png", value: 11 },
  { src: "/cards/img/playing_cards/jack_heart.png", value: 11 },
  { src: "/cards/img/playing_cards/jack_spade.png", value: 11 },
  { src: "/cards/img/playing_cards/queen_club.png", value: 12 },
  { src: "/cards/img/playing_cards/queen_diamond.png", value: 12 },
  { src: "/cards/img/playing_cards/queen_heart.png", value: 12 },
  { src: "/cards/img/playing_cards/queen_spade.png", value: 12 },
  { src: "/cards/img/playing_cards/king_club.png", value: 13 },
  { src: "/cards/img/playing_cards/king_diamond.png", value: 13 },
  { src: "/cards/img/playing_cards/king_heart.png", value: 13 },
  { src: "/cards/img/playing_cards/king_spade.png", value: 13 },
  { src: "/cards/img/playing_cards/ace_club.png", value: 14 },
  { src: "/cards/img/playing_cards/ace_diamond.png", value: 14 },
  { src: "/cards/img/playing_cards/ace_heart.png", value: 14 },
  { src: "/cards/img/playing_cards/ace_spade.png", value: 14 },
];

const gameStateEnum = {
  NewGame: "new_game",
  PlayerTurn: "player_turn",
  AITurn: "ai_turn",
};

export default function CastleSinglePlayerGame({ numberOfAI }) {
  const [gameState, setGameState] = useState(gameStateEnum.NewGame);
  const [drawPile, setDrawPile] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);
  const [boardPile, setBoardPile] = useState([]);
  const [playerFaceDownCards, setPlayerFaceDownCards] = useState([]);
  const [playerFaceUpCards, setPlayerFaceUpCards] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [aiOneFaceDownCards, setAIOneFaceDownCards] = useState([]);
  const [aiOneFaceUpCards, setAIOneFaceUpCards] = useState([]);
  const [aiOneHand, setAIOneHand] = useState([]);

  const newGame = (numberOfAI) => {
    const shuffledCards = [...deck]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setPlayerFaceDownCards(shuffledCards.splice(0, 3));
    setAIOneFaceDownCards(shuffledCards.splice(0, 3));
    setPlayerHand(shuffledCards.splice(0, 6));
    setAIOneHand(shuffledCards.splice(0, 6));
    setDrawPile(shuffledCards);
    setGameState(gameStateEnum.NewGame);
  };

  const playerPlay = () => {
    const selectedCards = playerHand.filter((c) => c.selected === true);
    if (gameState === gameStateEnum.NewGame && selectedCards.length === 3) {
      // add selected cards to player face up cards
      setPlayerFaceUpCards(
        selectedCards.map((card) => {
          return { ...card, selected: false };
        })
      );

      // remove selected cards from player's hand
      const newPlayerHand = playerHand.filter(
        (h) => !selectedCards.some((s) => h.src === s.src)
      );
      setPlayerHand(newPlayerHand);

      // select ai face up cards
      const aiCards = aiOneHand;
      setAIOneFaceUpCards(aiCards.splice(0, 3));
      setAIOneHand(aiCards);

      setGameState(gameStateEnum.PlayerTurn);
    }

    if (gameState === gameStateEnum.PlayerTurn) {
      setGameState(gameStateEnum.AITurn);

      const draw = drawPile;
      const board = [
        ...boardPile,
        selectedCards.map((card) => {
          return { ...card, selected: false };
        }),
      ];
      // add selected cards to player face up cards
      setBoardPile(board);

      // remove selected cards from player's hand and add cards from the draw pile
      const newPlayerHand = playerHand.filter(
        (h) => !selectedCards.some((s) => h.src === s.src)
      );
      const hand = [...newPlayerHand, draw.splice(0, selectedCards.length)];
      setPlayerHand(hand);

      setDrawPile(draw);
      setGameState(gameStateEnum.PlayerTurn);
    }
  };

  const handleChoice = (card) => {
    const selectedCards = playerHand.filter((c) => c.selected === true);
    if (gameState === gameStateEnum.NewGame && selectedCards.length <= 3) {
      setPlayerHand((currentHand) => {
        return currentHand.map((currentCard) => {
          if (currentCard.src === card.src) {
            if (selectedCards.length === 3) {
              return { ...currentCard, selected: false };
            } else {
              return { ...currentCard, selected: !currentCard.selected };
            }
          } else {
            return { ...currentCard };
          }
        });
      });
    }

    if (gameState === gameStateEnum.PlayerTurn) {
      setPlayerHand((currentHand) => {
        return currentHand.map((currentCard) => {
          if (currentCard.src === card.src) {
            if (currentCard.selected) {
              return { ...currentCard, selected: false };
            }

            if (selectedCards.length === 0) {
              return { ...currentCard, selected: true };
            }

            if (selectedCards.every((c) => c.value === currentCard.value)) {
              return { ...currentCard, selected: true };
            } else {
              return { ...currentCard, selected: false };
            }
          } else {
            return { ...currentCard };
          }
        });
      });
    }
  };

  // useEffect(() => {

  // }, [playerHandSelectedCards])

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
      <h2>
        <a
          href="https://en.m.wikipedia.org/wiki/Castle_(card_game)"
          target="_blank"
          rel="noreferrer noopener"
        >
          Game Instructions
        </a>
      </h2>
      <div className="game-board-one-ai-grid">
        <div></div>
        <div className="player-two hand">
          {aiOneHand.map((card) => (
            <CastleCard
              key={card.id}
              card={card}
              handleChoice={null}
              flipped={false}
              disabled={true}
              selected={card.selected}
            />
          ))}
        </div>
        <div></div>

        <div></div>
        <div className="player-two castle">
          {aiOneFaceDownCards.map((card) => (
            <CastleCard
              key={card.id}
              card={card}
              handleChoice={null}
              flipped={false}
              disabled={true}
              selected={card.selected}
            />
          ))}
          {aiOneFaceUpCards.map((card) => (
            <CastleCard
              key={card.id}
              card={card}
              handleChoice={null}
              flipped={true}
              disabled={true}
              selected={card.selected}
            />
          ))}
        </div>
        <div></div>

        <div className="draw-pile">
          <p>Draw Pile</p>
          <p className="counter">{drawPile.length}</p>
          {
            <CastleCard
              key={Math.random()}
              card={{ key: Math.random(), src: null, value: null }}
              handleChoice={null}
              flipped={false}
              disabled={true}
              selected={false}
            />
          }
        </div>
        <div className="board-pile">
          <p>Board</p>
          <p className="counter">{boardPile.length}</p>
          {boardPile.map((card) => (
            <CastleCard
              key={card.id}
              card={card}
              handleChoice={null}
              flipped={true}
              disabled={true}
              selected={false}
            />
          ))}
        </div>
        <div className="discard-pile">
          <p>Discard Pile</p>
          <p className="counter">{discardPile.length}</p>
          {
            <CastleCard
              key={Math.random()}
              card={{ key: Math.random(), src: null, value: null }}
              handleChoice={null}
              flipped={false}
              disabled={true}
              selected={false}
            />
          }
        </div>

        <div></div>
        <div className="player-one castle">
          {playerFaceDownCards.map((card) => (
            <CastleCard
              key={card.id}
              card={card}
              handleChoice={null}
              flipped={false}
              disabled={true}
              selected={card.selected}
            />
          ))}
          {playerFaceUpCards.map((card) => (
            <CastleCard
              key={card.id}
              card={card}
              handleChoice={null}
              flipped={true}
              disabled={false}
              selected={card.selected}
            />
          ))}
        </div>
        <div></div>

        <div></div>
        <div className="player-one hand">
          {playerHand.map((card) => (
            <CastleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={true}
              disabled={false}
              selected={card.selected}
            />
          ))}
          <button id="btnPlayerPlay" onClick={() => playerPlay()}>
            Play
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
