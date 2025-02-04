import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


// 
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

  return sortedCountries;
};


export const fetchAPI = async () => {
  try {
    const res = await axios.get('http://fofallaravel.clientes.space/api/teste');
    console.log(res.data);
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error);
  }
};