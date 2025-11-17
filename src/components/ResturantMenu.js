import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resMenuMockData from "../utils/resMenuMockData";
//import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  //const { resId } = useParams(); // This is the params that we are using in the route

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    /*
    * commenting this code because the resturant menu api is not working due to the cors issue 
    so using the mockdata on behalf of it 
    // const data = await fetch(
    //   MENU_API+resId
    // );
    //const json = await data.json();
    //console.log(data);
    */
    setResInfo(resMenuMockData);
    //console.log("resinfo=", resInfo);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[4]?.card
      ?.card;

  // console.log("itemCards===", itemCards);

  return (
    <div className="menu">
      <h1>Name Of The Resturant:{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwo}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
