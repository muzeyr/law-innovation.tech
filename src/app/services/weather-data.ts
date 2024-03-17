import { notFound } from "next/navigation";
import { ICurrentWeather } from "@/app/lib/types/definitions";
import { WeatherData } from "@/app/lib/types/weather.type";

export const fetchCurrentWeather = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  const url = `/api/weather?lat=${lat}&lon=${lon}`;
  let res = await fetch(url);
  let json = await res.json();
  return json;
};

export const fetchCoordinates = async (city: string, countryCode: string) => {
  const url = `/api/search?city=${city}&countryCode=${countryCode}`;
  let res = await fetch(url);
  let json = await res.json();
  return json;
};
