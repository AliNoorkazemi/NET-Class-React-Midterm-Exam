import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../Store/slices/theme";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
/**
 * home page 
 */
const Home = (props) => {
  //get theme state with redux 
  const theme = useSelector((state) => state.theme.theme);
  // create dispatch to use change action
  const dispatch = useDispatch();
  // create a state for read coins saved in local storage 
  const [local_store_coin, setCoins] = useState([]);

  // read from local storage by "coins" key in useEffect and parse it with json 
  useEffect(() => {
    setCoins(JSON.parse(localStorage.getItem("coins")));
  }, []);
  return (
    <div className={`background-home ${theme}`}>
      <div className="theme-button" onClick={() => dispatch(change())}>
        <p>Change Theme</p>
      </div>
      <div>
        <p className="title-home">
          Search & <br /> Buy<b className="title-crypto-section"> Crypto</b>
        </p>
        <div className="information-title">
          <p>Shahid Beheshti University</p>
          <p>IE Final Project</p>
        </div>
        <Link to={"/search"} className="search-button">
          <p>SEARCH MORE</p>
        </Link>
      </div>
      {Array.isArray(local_store_coin)
        ? local_store_coin.map((coin) => (
            <div key={coin.id} className="coin-local-store">
              <img src={coin.image.thumb} />
              <p className="coin-name-local-store">{coin.name}</p>
              <p>${coin.market_data.current_price.usd}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Home;
