// import dependencies and components

import bgCold from "./assets/cloud-free-sky-clipart-6.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { weatherInfo } from "./weatherservice";

//function recording the initial state of the app at runtime
function App() {
  const [city, setCity] = useState("Melbourne, AU");
  const [weather, setWeather] = useState(null);
  const [units] = useState("metric");

  //imports weather data from weatherservice.js using openweather API

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      const data = await weatherInfo(city, units);
      setWeather(data);
    };

    fetchWeatherInfo();
  }, [units, city]);

  const enterKey = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };

  //html elements appended to DOM on render
  return (
    <div className="app" style={{ backgroundImage: `url(${bgCold})` }}>
      <div className="overlay">
        <h1 class="heading">React Weather App</h1>
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input
                onKeyDown={enterKey}
                type="text"
                name="city"
                placeholder="Enter city, then press Enter to search:"
              />
            </div>
            <p>
              This is a simple weather app. You can search for current weather
              conditions for cities all around the world. You may need to
              include a country code for cities with duplicate names, e.g. there
              is both a Melbourne, AU and a Melbourne, US. A list of valid
              country codes can be found{" "}
              <a
                href="https://www.iso.org/obp/ui/#search/code"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="showers" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${
                  units === "metric" ? "C" : "F"
                }`}</h1>
              </div>
            </div>
            {/* {bottom description} */}
            <Descriptions weather={weather} units={units} />
          </div>
        )}
        <h4 id="signature">Paul Misso 2022</h4>
      </div>
    </div>
  );
}

export default App;
