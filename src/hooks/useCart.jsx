import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }
    return context;
}

export default useCart;