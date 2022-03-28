import axios from "axios";
import { useEffect, useState } from "react";
import Forcast from "./components/forcast/Forcast";
import Header from "./components/header/Header";
import { lat, long } from "./utils/index";
function App() {
  const key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState({});
  const [daily, setDaily] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(false);
    await axios
      .get(`https://api.darksky.net/forecast/${key}/${lat},%${long}`)
      .then((data) => {
        setWeather(data.data.currently);
        setDaily(data.data.daily.data[0]);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, lat, long]);
  return (
    <div className="home">{loading ? null : <><Header current={weather} daily={daily} />
    <Forcast/></>}</div>
  );
}

export default App;
