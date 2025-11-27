import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data }) => {
  //console.log("Data==", data);
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <img
            src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-down-arrow-icon-png-image_925727.jpg"
            width="15px"
            height="20px"
          />
        </div>
        {/**Accordian*/}
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
