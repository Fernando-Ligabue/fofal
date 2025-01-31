import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



export const fetchCountries = async () => {
  const res = await axios.get('https://restcountries.com/v3.1/all');
  const data = await res.data;

  const sortedCountries = data
    .map(country => ({
      label: country.name.common,
      value: country.name.common,
      flag: country.flags.png,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  console.log(sortedCountries);
  return sortedCountries;
};
