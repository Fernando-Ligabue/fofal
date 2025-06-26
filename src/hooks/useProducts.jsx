import { ProductsContext } from "@/context/ProductsContext";
import { useContext } from "react";

const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProducts deve ser usado dentro de um ProductsProvider');
    }
    return context;
}

export default useProducts;