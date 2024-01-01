// CSS
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

// Pages
import Card from "./pages/Card";

function App() {
  let mode = JSON.parse(localStorage.getItem("mode"))
    ? JSON.parse(localStorage.getItem("mode"))
    : "";

  const setMode = (item) => {
    localStorage.setItem("mode", JSON.stringify(item));
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: ":name",
      element: <Card />,
    },
  ]);

  return (
    <div className={mode ? `App ${mode}` : "App"}>
      <Header mode={mode} setMode={setMode} />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
