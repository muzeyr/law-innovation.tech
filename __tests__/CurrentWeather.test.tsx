import React from "react";
import { render, screen } from "@testing-library/react";
import { CurrentWeather } from "@/app/ui/weather";

import { CityName, WeatherIcon, WeatherInfo } from "@/app/ui/weather/index";
import { WeatherData } from "@/app/lib/types/weather.type";

const mockWeatherData = {
  city: {
    id: 1,
    name: "New York",
    coord: { lat: 40.7128, lon: -74.006 },
    country: "US",
    population: 8175133,
    timezone: -14400,
    sunrise: 1647516021,
    sunset: 1647557222,
  },
  cod: "200",
  message: 0.0093,
  cnt: 5,
  list: [
    {
      dt: 1647543600,
      main: {
        temp: 15.6,
        feels_like: 13.2,
        temp_min: 15.6,
        temp_max: 18.8,
        pressure: 1018,
        humidity: 45,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: { all: 0 },
      wind: { speed: 4.12, deg: 234, gust: 6.73 },
      visibility: 10000,
      pop: 0,
      dt_txt: "2024-03-17 12:00:00",
    },
    // Diğer günlerin verileri
  ],
};

test("renders current weather correctly", () => {
  render(<CurrentWeather currentWeather={mockWeatherData} name="New York" />);

  expect(screen.getByText("New York")).toBeInTheDocument();
  expect(screen.getByText("Temperature: 15.6")).toBeInTheDocument();
  expect(screen.getByText("clear sky")).toBeInTheDocument();
  // Diğer testler için gerekli kontrolleri yap
});
