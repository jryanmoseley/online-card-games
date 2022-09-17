import "./MemoryCard.css";

export default function MemoryCard({ card }) {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front"></img>
        <img className="back" src="/img/epl.png" alt="card back"></img>
      </div>
    </div>
  );
}
