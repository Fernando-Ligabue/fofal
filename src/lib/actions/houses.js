import axios from "axios"

export const fetchEntranceCarpetsHouses = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/loja/tapetes/casas`);
    return response.data;
}


export const fetchAlcatifasHouses = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/loja/alcatifas/casas`);
    return response.data;
}
