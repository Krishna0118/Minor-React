import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    humidity: 83,
    temp: 27.94,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox  updateInfo={updateInfo} />
      <InfoBox  info={weatherInfo}/>
    </div>
  );
}
