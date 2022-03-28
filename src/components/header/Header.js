import React from "react";
import { ReactComponent as Weather } from '../../images/Current-Icon.svg';
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
          <Weather/>
          <p>Cloudy</p>
        </div>

        <div className="degree">
          <h1>
            72<span>&#176;</span>
          </h1>
          <p>
            81<span>&#176;</span> / <span className="degree-min">63</span><span>&#176;</span>
          </p>
          <p className="degree-text">Cloudy throughout the day</p>
        </div>
      </div>
    </main>
  );
};

export default Header;
