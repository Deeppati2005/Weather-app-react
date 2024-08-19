import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weatherInfo, setweatherInfo] = useState({
    city: "Ranchi", 
    feelsLike: 24.84,
    temp: 25.05,
    temp_min: 25.05,
    temp_max: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setweatherInfo(newInfo);
  };

  return (
    <div>
      <h1>Weather app by Deep</h1>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
    </div>
  );
}
