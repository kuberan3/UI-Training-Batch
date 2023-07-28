import React from "react";
import { Link } from 'react-router-dom';
import "./App.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
const Header = (props) => {
  return (
    <div>
      <header>
        <div id="header-left">
          <Link to="/home" >Home</Link>
          <Link to="/buy"><HiOutlineShoppingCart/> Cart {props.data}</Link>
        </div>
        <div id="header-right">
          <h2>Sign In</h2>
          <img
            src="https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
            alt="login-logo"
            id="login-logo"
          ></img>
        </div>
      </header>
    </div>
  );
};
export default Header;
