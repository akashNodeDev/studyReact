import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

/**
 * Swiggy Like Website Structure
 /**
  * Header
  *   - Logo
  *   - Nav Items
  *   - Cart
  * 
  * Body
  *   - Search
  *   - Resturant Container
  *       - Resturant Card
  *           - Image
  *           - Res Name,Cusines,Star Rating,Delivery Time etc.
  * 
  * Footer
  *   - Links
  *   - Address
  *   - Contact
  * 
  */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
