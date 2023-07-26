import React from "react";
import { Link } from 'react-router-dom';
import "./App.css";
const Header = () => {
  return (
    <div>
      <header>
        <div id="header-left">
          {/* <img src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg" width="50px" height="50px" alt="logo"></img> */}
          {/* <a href="#sample">Home</a>
          <a href="#sample">Main</a>
          <a href="#sample">Items</a> */}

          <Link to="/" >Home</Link>
          <Link to="/main">Main</Link>
          <Link to="/item">Item</Link>
          {/* <Link to="/:id">About</Link> */}
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
