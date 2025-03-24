import { apiWeather } from "../api/apiWeather";
import { Weather } from "../../infraestructure/intercaces/WeatherResponse";


const apiKey = import.meta.env.VITE_API_KEY;

export const getWeather = async () => {
  try {
    const { data } = await apiWeather.get<Weather>("/current.json", {
      params: {
        key: apiKey,
        q: "florencia",
      },
    });

    if (data) {
      return data;
    }

    return null;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
