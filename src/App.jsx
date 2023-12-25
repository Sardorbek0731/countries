// CSS
import "./App.css";

// Components
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";

// Hooks
import { useFetch } from "./components/hooks/useFetch";
import { useState } from "react";

function App() {
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
    <div className="App">
      <Header />
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

      <Footer />
    </div>
  );
}

export default App;
