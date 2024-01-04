/* eslint-disable no-unused-vars */
// CSS
import "./App.css";

// React Router DOM
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pageNotFound/PageNotFound";

// Pages
import Card from "./pages/Card";

// Hooks
import { useState } from "react";

function App() {
  const [modeVal, setModeVal] = useState("");

  let mode = JSON.parse(localStorage.getItem("mode"))
    ? JSON.parse(localStorage.getItem("mode"))
    : "";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: ":name",
      element: <Card />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div className={mode ? `App ${mode}` : "App"}>
      <div className="bgColor"></div>
      <Header mode={mode} setModeVal={setModeVal} />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
