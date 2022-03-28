import React from "react";
import "./header.css";
const Header = () => {
  return (
    <main>
      <header>
        <h3>INSTAWEATHER</h3>
        <div className="type">
          <p>F</p>
          <p>C</p>
        </div>
      </header>
      <div className="sub-head">
        <div className="city">
          <h1>New Cairo</h1>
          <span>Friday 20, 2020</span>
          <img src='./images/Current-Icon.svg' alt='cloudy'/>
        </div>

        <div className="degree">
          <h1>
            72<span>&#176;</span>
          </h1>
          <p>
            81<span>&#176;</span> / 63<span>&#176;</span>
          </p>
          <p>Cloudy throughout the day</p>
        </div>
      </div>
    </main>
  );
};

export default Header;
