import axios from "axios"

export const fetchEntranceCarpetsComercial = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/loja/tapetes/comercioindustria`);
    return response.data;
}


export const fetchAlcatifasComercial = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/loja/alcatifas/comercioindustria`);
    return response.data;
}
