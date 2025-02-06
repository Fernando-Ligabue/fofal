/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        console.log("Produto sendo adicionado:", product);
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const updateCart = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    const cartCountItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const updateCartItems = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        
        if (!cartData[itemId] || !cartData[itemId]) return;

        cartData[itemId] = quantity;
        setCartItems(cartData);
    }


    const getCartAmount = () => {
        return cart.reduce((totalAmount, item) => {
            const itemTotal = item.price * item.quantity;
            return totalAmount + itemTotal;
        }, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart, cartCountItems, updateCartItems, getCartAmount }}>
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }
    return context;
}
