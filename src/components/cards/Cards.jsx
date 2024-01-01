/* eslint-disable react/prop-types */
import "./Cards.css";

import { NavLink } from "react-router-dom";

function Cards({ data, search }) {
  return (
    <main className="cards">
      {data &&
        data.map((item, i) => {
          return (
            item.name.common.toLowerCase().includes(search.toLowerCase()) && (
              <div className="cardItem" key={i}>
                <NavLink to={item.name.common}>
                  <img src={item.flags.svg} alt={item.flags.alt} />
                  <div className="mainInfo">
                    <h1 className="cardTitle">{item.name.common}</h1>
                    <h3 className="cardInfo">
                      <span>Population: </span>
                      {item.population}
                    </h3>
                    <h3 className="cardInfo">
                      <span>Region: </span>
                      {item.region}
                    </h3>
                    <h3 className="cardInfo">
                      <span>Capital: </span>
                      {item.capital}
                    </h3>
                  </div>
                </NavLink>
              </div>
            )
          );
        })}
    </main>
  );
}

export default Cards;
