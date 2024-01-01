// Components
import Cards from "../cards/Cards";
import Search from "../search/Search";

// Hooks
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

function Home() {
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");
  const [scrollY, setScrollY] = useState(false);

  const { data, isPending, error } = useFetch(
    select
      ? select != "All"
        ? `https://restcountries.com/v3.1/region/${select}`
        : "https://restcountries.com/v3.1/all"
      : "https://restcountries.com/v3.1/all"
  );

  localStorage.setItem("alpha", JSON.stringify("name"));

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  });

  return (
    <>
      <div
        className={scrollY ? "top active" : "top"}
        onClick={() => {
          scrollTop();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </div>
      <Search select={select} setSelect={setSelect} setSearch={setSearch} />
      <Cards data={data} search={search} />

      <div className={error ? "error" : "hidden"}>
        <h1>{error}</h1>
      </div>
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
    </>
  );
}

export default Home;
