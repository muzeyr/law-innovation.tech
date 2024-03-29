"use client";

import { BackButtonIcon } from "@/app/ui/elements/buttons/back-buttons";
import { WeatherData } from "@/app/lib/types/weather.type";
import { CityName, WeatherIcon, WeatherInfo } from "@/app/ui/weather/index";
import { useEffect, useState } from "react";

type GroupedData = {
  day: string;
  list: any[];
};

const groupByDate = (list: any[]): GroupedData[] => {
  return list.reduce((acc: GroupedData[], item: any) => {
    const date = item.dt_txt.split(" ")[0];
    const existingItem = acc.find((group) => group.day === date);
    if (existingItem) {
      existingItem.list.push(item);
    } else {
      acc.push({ day: date, list: [item] });
    }
    return acc;
  }, []);
};

const CurrentWeather = ({
  currentWeather,
  name,
}: {
  currentWeather: WeatherData;
  name: string;
}) => {
  const { list } = currentWeather;
  const [selectedItem, setSelectedItem] = useState<GroupedData | null>(null);

  const listNew = groupByDate(list);
  useEffect(() => {
    console.log(111);
    setSelectedItem(listNew[0]);
  }, []);
  return (
    <div>
      <div>
        <BackButtonIcon />
        <CityName text={name} />
      </div>
      <div className="flex justify-center">
        {listNew.map((item, index) => (
          <button
            key={index}
            className={`p-2 mr-2 ${
              selectedItem?.day === item.day
                ? "bg-blue-900 text-white"
                : "bg-blue-200"
            }`}
            onClick={() => setSelectedItem(item)}
          >
            {item.day}
          </button>
        ))}
      </div>
      <div className=" gap-6 mt-6 flex flex-wrap justify-center">
        {selectedItem?.list.map((day, index) => (
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
