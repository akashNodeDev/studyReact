import { useEffect, useState } from "react";
import resMenuMockData from "./resMenuMockData";
import { MENU_API } from "./constant";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    /* As the swiggy menu api is not working due to some cors blocking so using the mockData. 
       Therefore commenting the below code
    */
    /*
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json);
    */
    setResInfo(resMenuMockData);
  };

  return resInfo;
};

export default useResturantMenu;
