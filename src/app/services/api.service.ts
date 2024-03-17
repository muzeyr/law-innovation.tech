import { WeatherData } from "@/app/lib/types/weather.type";
import { notFound } from "next/navigation";
import { PrmResponseCoordinate } from "./types/coordinate.type";
import { PrmResponseWeather } from "./types/weather.type";
import { ICapital } from "../lib/types/definitions";
import { PrmResponseCapital } from "./types/capital.type";

export class ApiService {
  async fetchCoordinates(prm: PrmResponseCoordinate) {
    const { city, countryCode } = prm;
    const url = `${process.env.NEXT_PUBLIC_OPENWEATHER_BASE_URL}/geo/1.0/direct?q=${city},${countryCode}&limit=3&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Capital not found");
    }
  }
  async fetchCurrentWeather(prm: PrmResponseWeather): Promise<WeatherData> {
    const { lat, lon } = prm;
    const url = `${process.env.NEXT_PUBLIC_OPENWEATHER_BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&exclude=daily&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!data) {
        notFound();
      }
      return data as WeatherData;
    } catch (error) {
      console.log(error);
      throw new Error("Current Weather not found in this city");
    }
  }
  async fetchCities(prm: PrmResponseCapital) {
    const url = `${process.env.NEXT_PUBLIC_REST_COUNTRIES_BASE_URL}capital/${prm.term}?fields=capital,cca2,capitalInfo`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data && data.length > 0) {
        const cities = data.map((d: any) => ({
          id: d.cca2,
          name: d.capital[0],
          coordinates: {
            lat: d.capitalInfo.latlng[0],
            lon: d.capitalInfo.latlng[1],
          },
        }));
        return cities as ICapital[];
      }
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch cities");
    }
  }
}
