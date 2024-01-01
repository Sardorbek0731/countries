/* eslint-disable react/jsx-key */
import "./Card.css";

// hooks
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

import { NavLink } from "react-router-dom";

function Card() {
  const { name } = useParams();

  const location = JSON.parse(localStorage.getItem("alpha"))
    ? JSON.parse(localStorage.getItem("alpha"))
    : "name";

  const setLocation = (item) => {
    localStorage.setItem("alpha", JSON.stringify(item));
  };

  const handleAlpha = (item) => {
    setLocation("alpha");
    setAPI(`https://restcountries.com/v3.1/alpha/${item}`);
  };

  const [API, setAPI] = useState(
    `https://restcountries.com/v3.1/${location}/${name}`
  );
  const { data, isPending, error } = useFetch(API);

  return (
    <div className="Card">
      <NavLink
        className="back"
        to="/"
        onClick={() => {
          setLocation("name");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        Back
      </NavLink>
      {data && (
        <div className="cardItems">
          <div className="flag">
            <img src={data[0].flags.svg} alt={data[0].flags.alt} />
          </div>

          <div className="infos">
            <div className="name">
              <h1>{data[0].name.common}</h1>
            </div>
            <div className="row">
              <div className="column firstColumn">
                <div className="area infoItem">
                  <h3>
                    Area:
                    <span className="infoValue">{data[0].area} km²</span>
                  </h3>
                </div>
                <div className="nativeName infoItem">
                  <h3>
                    Native Name:
                    <span className="infoValue">{data[0].name.official}</span>
                  </h3>
                </div>
                <div className="population infoItem">
                  <h3>
                    Population:
                    <span className="infoValue">{data[0].population}</span>
                  </h3>
                </div>
                <div className="region infoItem">
                  <h3>
                    Region:
                    <span className="infoValue">{data[0].region}</span>
                  </h3>
                </div>
                <div className="subRegion infoItem">
                  <h3>
                    Subregion:
                    <span className="infoValue">{data[0].subregion}</span>
                  </h3>
                </div>
                <div className="capital infoItem">
                  <h3>
                    Capital:
                    <span className="infoValue">
                      {data[0].capital ? data[0].capital[0] : "-"}
                    </span>
                  </h3>
                </div>
              </div>
              <div className="column secondCoumn">
                <div className="tld infoItem">
                  {data[0].tld ? (
                    <h3>
                      Top Level Domain:
                      <span className="infoValue">{data[0].tld[0]}</span>
                    </h3>
                  ) : (
                    <h3>
                      Top Level Domain:
                      <span className="infoValue">-</span>
                    </h3>
                  )}
                </div>
                <div className="currencies infoItem">
                  <h3>
                    Currencies:
                    <span className="infoValue">
                      {Object.values(data[0].currencies)[0].name}
                    </span>
                  </h3>
                </div>
                <div className="languages infoItem">
                  <h3>
                    Languages:
                    {Object.values(data[0].languages).map((item, i) => {
                      return i + 1 !==
                        Object.values(data[0].languages).length ? (
                        <span className="infoValue" key={i}>
                          {item},
                        </span>
                      ) : (
                        <span className="infoValue" key={i}>
                          {item}
                        </span>
                      );
                    })}
                  </h3>
                </div>
              </div>
            </div>
            <div className="borders infoItem">
              <h3>Border Countries:</h3>
              <div className="borderItems">
                {data[0].borders ? (
                  data[0].borders.map((item, i) => {
                    return (
                      <NavLink
                        onClick={() => handleAlpha(item)}
                        to={"/" + item}
                        key={i}
                      >
                        <span className="borderItem">{item}</span>
                      </NavLink>
                    );
                  })
                ) : (
                  <span className="noBorder">No border</span>
                )}
              </div>
            </div>
          </div>
        </div>
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
