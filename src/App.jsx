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
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/card",
      element: <Card />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
