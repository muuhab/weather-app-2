import React from "react";
import { ReactComponent as Weather } from "../../images/Current-Icon.svg";
import "./header.css";
import { formatDate } from "../../utils/index";

const Header = ({ current, daily }) => {
  const { time, summary, temperature, icon } = current;
  const { summary: allDay, temperatureMax, temperatureMin } = daily;
  const todayTime = new Date(time * 1000);
  const today = formatDate(
    todayTime.getUTCDay(),
    todayTime.getUTCDate(),
    todayTime.getUTCFullYear()
  );
  console.log();
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
          <span>{today}</span>
          <Weather />
          <p>{summary}</p>
        </div>

        <div className="degree">
          <h1>
            {parseInt(temperature)}
            <span>&#176;</span>
          </h1>
          <p>
            {parseInt(temperatureMax)}
            <span>&#176;</span> /{" "}
            <span className="degree-min">{parseInt(temperatureMin)}</span>
            <span>&#176;</span>
          </p>
          <p className="degree-text">{allDay}</p>
        </div>
      </div>
    </main>
  );
};

export default Header;
