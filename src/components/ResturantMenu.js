import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resMenuMockData from "../utils/resMenuMockData";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useResturantMenu";
//import { MENU_API } from "../utils/constant";

const ResturantMenu = () => {
  const { resId } = useParams(); // This is the params that we are using in the route
  //console.log("resid============", resId);
  /** Here useResturantMenu is a custom hook */
  const resInfo = useResturantMenu(resId);

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
