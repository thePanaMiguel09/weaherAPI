import { useEffect, useState } from "react";

import { getWeather } from "../core/actions/getWeather";
import { Weather } from "../infraestructure/intercaces/WeatherResponse";
import WeatherCard from "./components/WeatherCard";

import "./App.css";

function App() {
  const [clima, setClima] = useState<Weather>();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather();
        if (data) {
          console.log(JSON.stringify(clima));
          setClima(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-sky-600">
      {clima ? (
        <WeatherCard
          city={clima?.location.name!}
          conditon={clima?.current.condition!}
          region={clima?.location.region!}
          temperature={clima?.current.feelslike_c!}
          humility={clima.current.humidity}
          wind={clima.current.wind_kph}
        />
      ) : (
        <div>
          <h1 className="text-2xl text-white font-bold">Cargando el Clima</h1>
        </div>
      )}
    </div>
  );
}

export default App;
