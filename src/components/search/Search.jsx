/* eslint-disable react/prop-types */
// CSS
import "./Search.css";

import { useState } from "react";

function Search({ select, setSelect, setSearch }) {
  const [show, setShow] = useState(true);

  const filtered = (value) => {
    setSelect(value);
    setShow(true);
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="search"
          placeholder="Search for a country..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="select">
        <form>
          <div className="searchSelect">
            <div
              className={select ? "hidden" : "resultSelect"}
              onClick={() => {
                show ? setShow(false) : setShow(true);
              }}
            >
              <h1>Filter by Region</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>

            <div
              className={select ? "resultSelect" : "hidden"}
              onClick={() => {
                show ? setShow(false) : setShow(true);
              }}
            >
              <h1 className="selectValue">{select}</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>

            <ul className={show ? "hidden" : "searchSelectList"}>
              <li
                onClick={() => {
                  filtered("All");
                }}
              >
                All
              </li>
              <li
                onClick={() => {
                  filtered("Africa");
                }}
              >
                Africa
              </li>
              <li
                onClick={() => {
                  filtered("America");
                }}
              >
                America
              </li>
              <li
                onClick={() => {
                  filtered("Asia");
                }}
              >
                Asia
              </li>
              <li
                onClick={() => {
                  filtered("Europe");
                }}
              >
                Europe
              </li>
              <li
                onClick={() => {
                  filtered("Oceania");
                }}
              >
                Oceania
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
