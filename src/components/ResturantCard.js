import { CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#F0F0F0",
};

const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
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
    </div>
  );
};

export default ResturantCard;
