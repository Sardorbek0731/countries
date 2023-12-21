// CSS
import "./App.css";

// Components
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Cards from "./components/cards/Cards";

// Hooks
import { useFetch } from "./components/hooks/useFetch";
import { useState } from "react";

function App() {
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");

  const { data, isPending, error } = useFetch(
    select
      ? search
        ? `https://restcountries.com/v3.1/name/${search}?region=${select}`
        : `https://restcountries.com/v3.1/region/${select}`
      : search
      ? `https://restcountries.com/v3.1/name/${search}`
      : "https://restcountries.com/v3.1/all"
  );

  return (
    <div className="App">
      <Header />
      <Search select={select} setSelect={setSelect} setSearch={setSearch} />
      <Cards data={data} />

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
    </div>
  );
}

export default App;
