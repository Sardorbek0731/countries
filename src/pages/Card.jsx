/* eslint-disable react/jsx-key */
import "./Card.css";
import PageNotFound from "../components/pageNotFound/PageNotFound";

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
                  <h3>Area:</h3>
                  <span className="infoValue">{data[0].area} km²</span>
                </div>
                <div className="nativeName infoItem">
                  <h3>Native Name:</h3>
                  <span className="infoValue">{data[0].name.official}</span>
                </div>
                <div className="population infoItem">
                  <h3>Population:</h3>
                  <span className="infoValue">{data[0].population}</span>
                </div>
                <div className="region infoItem">
                  <h3>Region:</h3>
                  <span className="infoValue">{data[0].region}</span>
                </div>
                <div className="subRegion infoItem">
                  <h3>Subregion:</h3>
                  <span className="infoValue">{data[0].subregion}</span>
                </div>
                <div className="capital infoItem">
                  <h3>Capital:</h3>
                  <span className="infoValue">
                    {data[0].capital ? data[0].capital[0] : "-"}
                  </span>
                </div>
              </div>
              <div className="column secondColumn">
                <div className="tld infoItem">
                  {data[0].tld ? (
                    <>
                      <h3>Top Level Domain:</h3>
                      <span className="infoValue">{data[0].tld[0]}</span>
                    </>
                  ) : (
                    <>
                      <h3>Top Level Domain:</h3>
                      <span className="infoValue">-</span>
                    </>
                  )}
                </div>
                <div className="currencies infoItem">
                  <h3>Currencies:</h3>
                  <span className="infoValue">
                    {Object.values(data[0].currencies)[0].name}
                  </span>
                </div>
                <div className="languages infoItem">
                  <h3>Languages:</h3>
                  <div className="langValues">
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
                  </div>
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
          <PageNotFound error={error} />
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
