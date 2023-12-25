import "./Card.css";

// hooks
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Card() {
  const { name } = useParams();

  const { data, isPending, error } = useFetch(
    `https://restcountries.com/v3.1/name/${name}`
  );

  return (
    <div className="Card">
      {data && (
        <>
          <div className="flag">
            <img src={data[0].flags.svg} alt={data[0].flags.alt} />
          </div>

          <div className="infos">
            <div className="name">
              <h1>{data[0].name.common}</h1>
            </div>
          </div>
        </>
      )}

      {
        <div className={error ? "error" : "hidden"}>
          <h1>{error}</h1>
        </div>
      }

      {
        <div className={isPending ? "loader" : "hidden"}>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      }
    </div>
  );
}

export default Card;
