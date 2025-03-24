import { Condition } from "../../infraestructure/intercaces/WeatherResponse";

interface Props {
  conditon: Condition;
  temperature: number;
  city: string;
  region: string;
  wind: number;
  humility: number;
}

function WeatherCard({ city, conditon, region, temperature,humility,wind }: Props) {
  return (
    <div
      style={{
        width: "30%",
        height: "500px",
        border: "solid",
        borderWidth: "1px",
        borderColor: "white",
        borderRadius: "20px",
      }}
      className="flex flex-col justify-evenly items-center bg-linear-to-t from-indigo-500 to-sky-500 shadow-xl shadow-cyan-500/50"
    >
      <div className="flex flex-col items-center">
        <img
          src={conditon.icon}
          alt="Condition"
          className=" h-[64px] w-[64px] mb-48"
        />
        <h1 className="text-6xl text-white font-bold">{temperature + " °C"}</h1>
        <h2 className="text-3xl text-white font-semibold">
          {city + "-" + region}
        </h2>
      </div>

      <div className="flex justify-around" style={{width: '100%'}}>
        <div className="text-2xl text-white font-semibold">{humility}
          <p className="font-light">Humidity</p>
        </div>
        <div className="text-2xl text-white font-semibold">{wind}
        <p className="font-light">Wind</p>
        </div>
        
      </div>
    </div>
  );
}

export default WeatherCard;
