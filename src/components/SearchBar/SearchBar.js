// You do not need to change any code in this file for MVP
import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons';
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar-wrapper">
      <div className="social">
        {/* <FontAwesomeIcon icon={faInstagram} /> */}
        <i className="fa-brands fa-instagram"></i>
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          {/* <FontAwesomeIcon icon={faCompass} /> */}
          <i className="fa-regular fa-compass"></i>
        </div>
        <div className="social">
          {/* <FontAwesomeIcon icon={faHeart} /> */}
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="social">
          {/* <FontAwesomeIcon icon={faCircle} /> */}
          <i className="fa-regular fa-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
