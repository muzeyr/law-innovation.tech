"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { City } from ".";
import { ICapital } from "@/app/lib/types/definitions";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/redux-hooks";
import {
  addCapital,
  selectCapitalIds,
} from "@/app/lib/redux/features/capitals/capitals-slice";
import { SaveButton } from "../elements/buttons";

const CityList = ({
  cities,
  query,
}: {
  cities: ICapital[] | undefined;
  query: string;
}) => {
  const router = useRouter();
  const selectedIds = useAppSelector(selectCapitalIds);
  const dispatch = useAppDispatch();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string>("");

  const clickHandler = (id: string) => {
    setActiveId(id);
    setIsSelected(!isSelected);
  };

  const saveHandler = (city: ICapital) => {
    dispatch(addCapital(city));
    setActiveId("");
    router.push("/");
  };
  return (
    <div className="w-full">
      {cities &&
        cities.slice(0, 8).map((city) => {
          const check = isSelected && city.id === activeId;
          return (
            <div key={city.id}>
              {!Array.isArray(selectedIds) || !selectedIds.includes(city.id) ? (
                <div key={city.id} onClick={() => clickHandler(city.id)}>
                  <div
                    className={`${
                      check ? "bg-white/20" : ""
                    } w-full cursor-pointer text-primary/60 flex items-center justify-between p-2`}
                  >
                    <City city={city} term={query} />
                    {check && <SaveButton onClick={() => saveHandler(city)} />}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
    </div>
  );
};

export default CityList;
