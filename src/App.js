// import dependencies and components

import bgCold from "./assets/cloud-free-sky-clipart-6.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { weatherInfo } from "./weatherservice";

function App() {
  const [city, setCity] = useState("Melbourne, AU");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

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

  return (
    <div className="app" style={{ backgroundImage: `url(${bgCold})` }}>
      <div className="overlay">
        <h1 class="header">React Weather App</h1>
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
              This simple app will display weather conditions for cities all
              around the world. You may need to include a country code for
              cities with duplicate names, for example there is both a
              Melbourne, AU and a Melbourne, US. A list of valid country codes
              can be found{" "}
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
      </div>
    </div>
  );
}

export default App;
