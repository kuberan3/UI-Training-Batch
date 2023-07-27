import React from "react";
import { Link } from 'react-router-dom';
import "./App.css";
const Header = (props) => {
  

  // console.log(functions)
  return (
    <div>
      <header>
        <div id="header-left">
          <Link to="/home" >Home</Link>
          <Link to="/buy"><img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" width="30px" height="30px"></img> Cart {props.data}</Link>
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
