import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const apiURL = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "327ab9418f30ce661a4aca49e5d917d4";

  let getWeatherInfo = async () => {
    try {
      setError(false);
      let response = await fetch(
        `${apiURL}?q=${city}&appid=${apiKey}&units=metric`
      );
      let data = await response.json();
      let result = {
        city: city,
        temp: data.main.temp,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      setError(false);
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="searchBox">
      <form>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button onClick={handleSubmit} variant="contained" type="submit">
          Search
        </Button>
        {error && <p style ={{color : "red"}}>No such place exists !! </p>}
      </form>
    </div>
  );
}