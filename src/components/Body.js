import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable
  const [listOfResturants, setListOfResturant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //console.log("Res List Changed");
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfResturant(filteredList);
            console.log("Res List filtered", filteredList);
          }}>
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
