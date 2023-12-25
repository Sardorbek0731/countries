// Components
import Cards from "../cards/Cards";
import Search from "../search/Search";

// Hooks
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

function Home() {
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");

  const { data, isPending, error } = useFetch(
    select
      ? select != "All"
        ? `https://restcountries.com/v3.1/region/${select}`
        : "https://restcountries.com/v3.1/all"
      : "https://restcountries.com/v3.1/all"
  );

  return (
    <>
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
