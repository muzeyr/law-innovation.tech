type WeatherInfo = {
  date: string;
  temperature?: string;
};

const WeatherInfo = ({ date, temperature }: WeatherInfo) => {
  return (
    <div className="w-[96px] flex flex-col items-center gap-2 mx-auto">
      <p>
        {new Date(date).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p>{temperature}</p>
    </div>
  );
};

export default WeatherInfo;
