import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-spicy-eat-resturent-logo-png-image_16234139.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#F0F0F0",
};

const ResturantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      {/* We can also write like  style={{backgroundColor: "#F0F0F0"}} Here we give the css in the form of the JS object */}
      <img
        className="res-logo"
        alt="card-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/27/1489cae0-db9d-4050-aa9d-a058decede06_994876.jpg"></img>
      <h3>Cafe Amudham</h3>
      <h4> South Indian, Home Food </h4>
      <h4> 4.5 Stars </h4>
      <h4>50-60 mins </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  );
};

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
