import "./MemoryCard.css";

export default function MemoryCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front"></img>
        <img
          className="back"
          src="/img/epl.png"
          onClick={handleClick}
          alt="card back"
        ></img>
      </div>
    </div>
  );
}
