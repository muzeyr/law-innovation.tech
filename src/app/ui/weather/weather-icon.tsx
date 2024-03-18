const WeatherIcon = ({ className }: { className: string }) => {
  return (
    <span className="text-black/80 text-8xl">
      <i className={className} />
    </span>
  );
};

export default WeatherIcon;
