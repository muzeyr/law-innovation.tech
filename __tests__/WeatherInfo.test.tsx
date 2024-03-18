import React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherInfo } from "@/app/ui/weather";

test("renders weather information correctly", () => {
  const mockDate = "2024-03-17 02:00:00";
  const mockTemperature = "Temperature: 15.6°C";
  render(<WeatherInfo date={mockDate} temperature={mockTemperature} />);

  const renderedDate = screen.getByText("02:00 AM");
  expect(renderedDate).toBeInTheDocument();

  const renderedTemperature = screen.getByText("Temperature: 15.6°C");
  expect(renderedTemperature).toBeInTheDocument();
});
