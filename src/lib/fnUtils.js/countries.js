import { countries } from "../constants";

export const fetchCountries = async () => {
  const url = countries;
  
  try {
    const data = url;
    console.log(data);

    const sorted = data
      .map(c => ({
        label: c.name,
        value: c.name,
        flag: `https://flagcdn.com/20x15/${c.iso.toLowerCase()}.webp`,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));

    return sorted;
  } catch (err) {
    console.error("Erro ao carregar países:", err);
    return [];
  }
};
