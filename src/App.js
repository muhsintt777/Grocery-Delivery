import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
