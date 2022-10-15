import "./CastleCard.css";

export default function CastleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  const getSrc = () => {
    if (flipped) {
      return card.src;
    }
    return "/cards/img/playing_cards/blue_back.png";
  };

  return (
    <div className="castle-card">
      <img src={getSrc()} alt="card" onClick={handleClick}></img>
    </div>
  );
}
