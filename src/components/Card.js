import { cloudURL } from "../constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <>
      <div className="Card">
        <img src={cloudURL + cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
