import ResturantCard, { cardWithPromoted } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import useCheckOnline from "../utils/useCheckOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable
  const [listOfResturants, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]); // Added copy so that in the search it will not effect the original list
  const [searchText, setSearchText] = useState("");
  const ResWithPromotedCard = cardWithPromoted(ResturantCard);

  useEffect(() => {
    //console.log("Hello It Loads immediately after the body componenet loads");
    fetchResturantList();
  }, []);

  const fetchResturantList = async () => {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9257514&lng=77.6704236&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const response = await resData.json();
    //console.log("response=", response);
    //optional chaining
    setListOfResturant(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredResturant(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  // console.log("Body componenet called First");

  const checkOnlineStatus = useCheckOnline();
  //console.log("checkOnlineStatus===", checkOnlineStatus);

  if (checkOnlineStatus === false)
    return (
      <h1>Oops:You are offline. Please check your internet connection once!</h1>
    );

  const { setUserName, loggedInUser } = useContext(UserContext);

  // Conditional Rendering

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              //console.log("event=", e);
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-2 rounded-lg"
            onClick={() => {
              // console.log("searchText==", searchText);
              const filteredResturant = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredResturant(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              //console.log("Res List Changed");
              const filteredList = listOfResturants.filter(
                (res) => res.info.avgRating > 4.2,
              );
              setFilteredResturant(filteredList);
              // console.log("Res List filtered", filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center ">
          <label> Username: </label>
          <input
            className="border border-black p-2"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResturant.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/restaurants/" + resturant.info.id}
          >
            {resturant.info.avgRating > 4.3 ? (
              <ResWithPromotedCard resData={resturant} />
            ) : (
              <ResturantCard resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
