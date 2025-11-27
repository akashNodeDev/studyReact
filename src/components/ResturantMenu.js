import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resMenuMockData from "../utils/resMenuMockData";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
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

  // console.log(
  //   "category list=====",
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards
  // );

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("categories==", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">Name Of The Resturant:{name}</h1>
      <p className="font-bold text-lg">
        {cuisines}-{costForTwo}
      </p>
      {/*Category Map*/}
      {categories.map((category) => (
        <ResturantCategory
          key={category?.card?.card.categoryId}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
