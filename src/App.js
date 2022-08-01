import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Fruits from "./Pages/Fruits/Fruits";
import HomePage from "./Pages/HomePage";
import Snacks from "./Pages/Snacks/Snacks";
import Vegetables from "./Pages/Vegetables";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/vegetables"
          element={<Vegetables/>}
        />
        <Route
          path="/fruits"
          element={<Fruits/>}
        />
        <Route
          path="/snacks"
          element={<Snacks/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
