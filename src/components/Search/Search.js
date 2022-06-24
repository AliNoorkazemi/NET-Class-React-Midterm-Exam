import "./Search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/**
 * search page
 */
const Search = (props) => {
  // use navigation for go to details page of each row of crypto currency table
  const navigate = useNavigate();
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=";
  // query that searched from user in input
  const [query, setQuery] = useState("");
  // state for result of search api
  const [currency_list, setCurrencyList] = useState([]);
  // filter fucntion to handle call api in submit button clicked and save result in list
  const filter = () => {
    fetch(`${url}${query}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setCurrencyList(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div className="background">
      <div>
        <div className="title">Search Coin</div>
        <div className="title-infromation">Get infromation from here</div>
      </div>
      <div className="search-box-container">
        <div className="search-box-container-title">
          Cryptocurrency Prices by Market Cap
        </div>
        <div className="search-from">
          <input
            type="text"
            placeholder="Search For a Crypto Currency.."
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button type="submit" onClick={filter}>
            Submit
          </button>
        </div>
        <div className="table-title">
          <div className="table-column-title-left">Coin</div>
          <div className="table-column-title-right">Price</div>
          <div className="table-column-title-right">24h Change</div>
          <div className="table-column-title-right">Market Cap</div>
        </div>
        <div className="currency-list-container">
          <table>
            <tbody>
              {currency_list.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => navigate(`/coin-details/${item.id}`)}
                >
                  <td>
                    <img src={item.image} />
                    <p style={{color:"gold"}}>{item.name}</p>
                  </td>
                  <td>${item.current_price}</td>
                  {item.price_change_percentage_24h >= 0 ? (
                    <td style={{ color: "green" }}>
                      {item.price_change_percentage_24h}%
                    </td>
                  ) : (
                    <td style={{ color: "red" }}>
                      {item.price_change_percentage_24h}%
                    </td>
                  )}
                  <td>${item.market_cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Search;
