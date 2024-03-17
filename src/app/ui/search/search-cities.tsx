"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";
import { IoChevronDown } from "react-icons/io5";
import { BackButtonIcon } from "../elements/buttons/back-buttons";
import { SearchInput } from "../elements/inputs";

const SearchCities = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(window.location.search);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full flex flex-col gap-14 relative">
      <BackButtonIcon />
      <div className="w-full flex items-center">
        <SearchInput
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search capitals"
        />
        <IoChevronDown className="text-primary/40 text-xl -ml-[20px]" />
      </div>
    </div>
  );
};

export default SearchCities;
