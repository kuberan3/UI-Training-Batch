import React from "react";
import "./App.css";
const Header = () => {
  return (
    <div>
      <header>
        <div id="header-left">
          {/* <img src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg" width="50px" height="50px" alt="logo"></img> */}
          <a href="#sample">menu</a>
          <a href="#sample">items</a>
          <a href="#sample">Sample</a>
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
