import React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherInfo } from "@/app/ui/weather";

test("renders weather information correctly", () => {
  const mockDate = "2024-03-17 12:00:00";
  const mockTemperature = "Temperature: 15.6°C";

  render(<WeatherInfo date={mockDate} temperature={mockTemperature} />);

  // Tarih bilgisinin doğru şekilde render edildiğini kontrol et
  const renderedDate = screen.getByText("3/17/2024"); // Tarih formatı test ortamına göre değişebilir
  expect(renderedDate).toBeInTheDocument();

  // Sıcaklık bilgisinin doğru şekilde render edildiğini kontrol et
  const renderedTemperature = screen.getByText("Temperature: 15.6°C");
  expect(renderedTemperature).toBeInTheDocument();
});
