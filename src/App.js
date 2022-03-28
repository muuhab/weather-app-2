import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import {lat,long} from './utils/index'
function App() {
  const key=process.env.REACT_APP_API_KEY
  console.log(lat)
  console.log(long)
  const [weather,setWeather] = useState({})
  const [daily,setDaily] = useState({})
  const fetchWeather= async ()=>{

    const result =await axios.get(`https://api.darksky.net/forecast/${key}/${lat},%${long}`)
    setWeather(result.data.currently)
    setDaily(result.data.daily.data[0])
  }
  useEffect(() => {
    fetchWeather()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key,lat,long]);
  return (
    <div>
      <Header current={weather} daily={daily} />
    </div>
  );
}

export default App;
