import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  // Local State Variable
  const [listOfResturants, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]); // Added copy so that in the search it will not effect the original list
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //console.log("Hello It Loads immediately after the body componenet loads");
    fetchResturantList();
  }, []);

  const fetchResturantList = async () => {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9257514&lng=77.6704236&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await resData.json();
    //console.log("response=", response);
    //optional chaining
    setListOfResturant(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResturant(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log("Body componenet called First");

  // if (listOfResturants.length === 0) {
  //   return <Shimmer></Shimmer>;
  // }

  // Conditional Rendering

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              //console.log("event=", e);
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log("searchText==", searchText);
              const filteredResturant = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturant(filteredResturant);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //console.log("Res List Changed");
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredResturant(filteredList);
            console.log("Res List filtered", filteredList);
          }}>
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
