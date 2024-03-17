"use client";

import { usePathname, useRouter } from "next/navigation";
import { AddButton, CityButton } from "@/app/ui/elements/buttons";
import { useAppSelector } from "@/app/lib/redux/redux-hooks";
import { selectCapitals } from "@/app/lib/redux/features/capitals/capitals-slice";
import { getEngLetters } from "@/app/utils/utils";

const SelectedCities = () => {
  const selected = useAppSelector(selectCapitals);
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();

  const getCityInfo = (cityName: string, countryCode: string) => {
    const params = new URLSearchParams(window.location.search);

    if (cityName && countryCode) {
      params.set("city", getEngLetters(cityName));
      params.set("countryCode", countryCode);
    } else {
      params.delete("city");
    }
    replace(`${pathname}?${params}`);
    router.push(`/weather?${params}`);
  };

  return (
    <section>
      <div className="flex flex-col items-center gap-4 pt-[80px]">
        <div className="flex flex-col items-center gap-2">
          {selected.map((city) => (
            <CityButton
              onClick={() => getCityInfo(city.name, city.id)}
              key={city.id}
            >
              {city.name}
            </CityButton>
          ))}
        </div>
        <AddButton />
      </div>
    </section>
  );
};

export default SelectedCities;
