export const fetchCities = async (term: string) => {
  if (term != "") {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/capital?term=${term}`;
    let res = await fetch(url);
    let json = await res.json();
    return json;
  } else {
    return [];
  }
};
