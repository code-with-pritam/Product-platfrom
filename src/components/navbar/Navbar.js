import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="nav-heading">
          <p className="product-para">
            THE <span className="product-span"> PRODUCT</span> PLATFORM
          </p>
        </div>
        <div className="learn">
          <select className="nav-select">
            <option value="">Learn</option>
            <option value="">Item 1</option>
            <option value="">Item 2</option>
            <option value="">Item 3</option>
          </select>
        </div>
        <div className="practice">
          <select className="nav-select">
            <option value="">practice</option>
            <option value="">Item 1</option>
            <option value="">Item 2</option>
            <option value="">Item 3</option>
          </select>
        </div>
        <div className="profile-img"></div>
      </div>
    </div>
  );
};

export default Navbar;
