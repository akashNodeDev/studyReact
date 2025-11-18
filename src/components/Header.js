import { Link } from "react-router";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router";
import useCheckOnline from "../utils/useCheckOnline";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const checkOnlineStatus = useCheckOnline();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status :{checkOnlineStatus ? "Online" : "Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
