import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/search" element={<Search />} />
        <Route path="/coin-details/:coin_id" element={<CoinDetails />} />
      </Routes>
    </div>
  );
}

export default App;
