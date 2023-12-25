import "./Card.css";

function Card() {
  return (
    <div className="Card">
      <div className="flag">
        <img
          src="https://flagcdn.com/uz.svg"
          alt="The flag of Uzbekistan is composed of three equal horizontal bands of turquoise, white with red top and bottom edges, and green. On the hoist side of the turquoise band is a fly-side facing white crescent and twelve five-pointed white stars arranged just outside the crescent opening in three rows comprising three, four and five stars."
        />
      </div>
      <div className="infos">
        <div className="name">
          <h1>Uzbekistan</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
