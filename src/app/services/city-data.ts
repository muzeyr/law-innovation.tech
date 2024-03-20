export const fetchCities = async (term: string) => {
  if (term != "") {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL}/api/capital?term=${term}`;
      let res = await fetch(url);
      let json = await res.json();
      return json;
    } catch (error) {
      return [];
    }
  } else {
    return [];
  }
};
