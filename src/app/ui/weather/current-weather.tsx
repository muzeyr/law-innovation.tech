"use client";

import { BackButtonIcon } from "@/app/ui/elements/buttons/back-buttons";
import { WeatherData } from "@/app/lib/types/weather.type";
import { CityName, WeatherIcon, WeatherInfo } from "@/app/ui/weather/index";

const CurrentWeather = ({
  currentWeather,
  name,
}: {
  currentWeather: WeatherData;
  name: string;
}) => {
  const { list } = currentWeather;
  return (
    <div>
      <div>
        <BackButtonIcon />
        <CityName text={name} />
      </div>
      <div className=" gap-6 mt-6 flex flex-wrap justify-center">
        {list.slice(0, 5).map((day, index) => (
          <div key={index} className={"text-center"}>
            <div className="space-y-4">
              <WeatherIcon className={`wi wi-owm-${day.weather[0].id}`} />
              <p className="text-sm">
                {day.weather[0].description.toUpperCase()}
              </p>
              <div className="w-[96px] flex flex-col items-center gap-2 mx-auto">
                <WeatherInfo
                  temperature={`Temperature: ${day?.main?.temp}`}
                  date={day.dt_txt}
                ></WeatherInfo>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentWeather;
