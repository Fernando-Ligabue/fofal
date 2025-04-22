import axios from "axios"

export const fetchUniversalCovers= async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/loja/coberturas`);
    return response.data;
}
