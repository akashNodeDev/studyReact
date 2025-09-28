import { CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#F0F0F0",
};

const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="res-card" style={styleCard}>
      {/* We can also write like  style={{backgroundColor: "#F0F0F0"}} Here we give the css in the form of the JS object */}
      <img
        className="res-logo"
        alt="card-image"
        src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")} </h4>
      <h4> {avgRating} Stars </h4>
      <h4> {sla.slaString} </h4>
    </div>
  );
};

export default ResturantCard;
