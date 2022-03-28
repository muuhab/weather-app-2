import React, { useState } from "react";
import { ReactComponent as Cloudy } from "../../images/Current-Icon.svg";
import { ReactComponent as Sunny } from "../../images/Current-Icon.svg";
import "./header.css";
import { formatDate,fToC } from "../../utils/index";

const Header = ({ current, daily }) => {
    const [fehrenheit,setFehrenheit] = useState(true)
  const { time, summary, icon } = current;
  const { summary: allDay } = daily;
  const temperature=fehrenheit?current.temperature:fToC(current.temperature)
  const temperatureMax=fehrenheit?daily.temperatureMax:fToC(daily.temperatureMax)
  const temperatureMin=fehrenheit?daily.temperatureMin:fToC(daily.temperatureMin)

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
          <button className={`scale-up-center ${fehrenheit&&"selected"}`} onClick={()=>{setFehrenheit(true)}}>F</button>
          <button className={`scale-up-center ${!fehrenheit&&"selected"}`} onClick={()=>{setFehrenheit(false)}}>C</button>
        </div>
      </header>
      <div className="sub-head">
        <div className="city">
          <h1>New Cairo</h1>
          <span>{today}</span>
          {icon==='clear-day'?
          <Sunny />
          :<Cloudy/>
          }
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
