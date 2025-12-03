import { CDN_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const styleCard = {
  backgroundColor: "#F0F0F0",
};

const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
      {/* We can also write like  style={{backgroundColor: "#F0F0F0"}} Here we give the css in the form of the JS object */}
      <img
        className="rounded-lg"
        alt="card-image"
        src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4> {cuisines.join(", ")} </h4>
      <h4> {avgRating} Stars </h4>
      <h4> {costForTwo} </h4>
      <h4> {sla.slaString} </h4>
      <h4> User: {loggedInUser}</h4>
    </div>
  );
};

export const cardWithPromoted = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-4 p-1 rounded-lg">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
