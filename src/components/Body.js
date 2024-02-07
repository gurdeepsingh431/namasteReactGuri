import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./Card";

function filterData(searchInput, restaurants) {
  const filteredData = restaurants?.filter((item) =>
    item?.data?.name?.toLowerCase().includes(searchInput?.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [searchInput, setSearchInput] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search.."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
