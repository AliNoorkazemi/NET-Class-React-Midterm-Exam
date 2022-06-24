import "./CoinDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
/**
 * coin details page 
 */
const CoinDetails = (props) => {
  // get id from url with useParams hooks
  const id = useParams().coin_id;
  // state for save desired coin
  const [coin, setCoin] = useState({});
  const url = "https://api.coingecko.com/api/v3/coins/";
  // fetch data in useEffect and save coin state , local storage
  useEffect(() => {
    fetch(`${url}${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          // save coin state
          setCoin(result);
          // read from local storage by "coins" key
          let coins = JSON.parse(localStorage.getItem("coins"));
          // check coins not null
          if (coins) {
            // check size of array equal to 3 and remove first element with shift mehtod
            if (coins.length === 3) {
              coins.shift();
            }
            // check content of array to not duplicated element added
            if (!coins.find((coin) => coin.name === result.name)) {
              coins.push(result);
              localStorage.setItem("coins", JSON.stringify(coins));
            }
          } else {
            coins = [];
            coins.push(result);
            localStorage.setItem("coins", JSON.stringify(coins));
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  // check coin fetched from api and not null
  if (coin.description) {
    return (
      <div className="details-page-container">
        <div>
          <img src={coin.image.large} />
        </div>
        <div className="coin-name">{coin.name}</div>
        <div className="coin-description">
          {coin.description.en.substring(
            0,
            coin.description.en.indexOf(".") + 1
          )}
        </div>
        <div className="coin-detail">
          RanK : {coin.market_data.market_cap_rank}
        </div>
        <div className="coin-detail">
          Current Price : ${coin.market_data.current_price.usd}
        </div>
        <div className="coin-detail">
          Market Cap : ${coin.market_data.market_cap.usd}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CoinDetails;
