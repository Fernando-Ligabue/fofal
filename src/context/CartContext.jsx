/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [cartItems, setCartItems] = useState([]);
    // const shipping_fee = 5.95;


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        console.log("Produto sendo adicionado:", product);
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                toast.success(`${product.quantity} unidade(s) do produto: "${product.title}" adicionado(s) ao carrinho.`);
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                        : item
                );
            }
            toast.success(`Produto "${product.title}" adicionado ao carrinho.`);
            return [...prevCart, { ...product, quantity: product.quantity || 1 }];
        });
    };

    const addSquareMeterToCart = (product, width = 0, height = 0, thickness = "") => {
        // Certificar-se de que o produto é vendido por metro quadrado
        if (product.isSoldPerSquareMeter) {
            const area = width * height;
    
            if (area <= 0) {
                toast.error("Por favor, insira as medidas de largura e altura.");
                return;
            }
    
            let finalPrice = product.price * area;
            
            let productDetails = {
                basePrice: finalPrice,
                thicknessCost: 0,
                glueCost: 0,
                shippingCost: 0
            };
    
            // Verificação para o tipo de produto MT113 (espessura e cola)
            if (product.type === "MT113") {
                let thicknessPricePerMeter = 0; // Preço por metro quadrado da espessura
                
                const thicknessStr = String(thickness || "");
                
                if (!thicknessStr || thicknessStr.trim() === "") {
                    toast.error("Por favor, forneça uma espessura para o produto MT113.");
                    return;
                }
                
                let thicknessMin, thicknessMax;
                
                if (thicknessStr.includes('-')) {
                    const thicknessRange = thicknessStr.split('-');
                    thicknessMin = parseFloat(thicknessRange[0]);
                    thicknessMax = parseFloat(thicknessRange[1]);
                } else {
                    thicknessMin = parseFloat(thicknessStr);
                    thicknessMax = thicknessMin;
                }
                
                if (isNaN(thicknessMin) || isNaN(thicknessMax)) {
                    toast.error("Os valores de espessura fornecidos não são números válidos.");
                    return;
                }
    
                if (thicknessMin >= 3 && thicknessMax <= 5) {
                    thicknessPricePerMeter = 26.63;
                } else if (thicknessMin >= 5 && thicknessMax <= 7) {
                    thicknessPricePerMeter = 28.33;
                } else if (thicknessMin >= 8 && thicknessMax <= 9) {
                    thicknessPricePerMeter = 30.42;
                } else if (thicknessMin >= 10 && thicknessMax <= 11) {
                    thicknessPricePerMeter = 54.96;
                } else if (thicknessMin >= 12 && thicknessMax <= 13) {
                    thicknessPricePerMeter = 56.65;
                } else if (thicknessMin >= 14 && thicknessMax <= 15) {
                    thicknessPricePerMeter = 58.74;
                } else if (thicknessMin >= 16 && thicknessMax <= 17) {
                    thicknessPricePerMeter = 60.84;
                } else {
                    toast.error("A espessura fornecida não é válida para o produto MT113.");
                    return;
                }
    
                const thicknessCost = thicknessPricePerMeter * area;
    
                const glueCost = 30.75;
    
                productDetails.thicknessCost = thicknessCost;
                productDetails.glueCost = glueCost;
    
                finalPrice += thicknessCost + glueCost;
                
                console.log(`Detalhes do cálculo MT113:
                    - Preço base: ${product.price * area}€
                    - Preço espessura (${thicknessPricePerMeter}€/m² × ${area}m²): ${thicknessCost}€
                    - Preço cola: ${glueCost}€
                    - Preço total antes do envio: ${finalPrice}€`);
            }
    
            let weightPerSquareMeter = 0;
            let shippingCost = 0;
    
            if (product.type === "BT200") {
                weightPerSquareMeter = 3.5;
            } else if (product.type === "BT INDOOR") {
                weightPerSquareMeter = 2.6;
            }
    
            const totalWeight = weightPerSquareMeter * area;
    
            if (totalWeight >= 13 && totalWeight <= 20) {
                shippingCost = 34.94;
            } else if (totalWeight >= 21 && totalWeight <= 30) {
                shippingCost = 40.59;
            } else if (totalWeight >= 31 && totalWeight <= 40) {
                shippingCost = 47.97;
            } else if (totalWeight >= 41 && totalWeight <= 50) {
                shippingCost = 55.35;
            } else if (totalWeight >= 51 && totalWeight <= 100) {
                shippingCost = 92.25;
            }
    
            productDetails.shippingCost = shippingCost;
    
            finalPrice += shippingCost;
    
            const uniqueId = `${product.id}-${width}-${height}-${thickness}`;
    
            console.log("Preço final calculado:", finalPrice, "Detalhes:", productDetails);
    
            setCart((prevCart) => {
                const existingProduct = prevCart.find(item => item.id === uniqueId);
                
                const productForCart = { 
                    ...product, 
                    id: uniqueId, 
                    quantity: 1, 
                    price: finalPrice, 
                    width, 
                    height, 
                    thickness, 
                    productDetails,
                    shippingCost 
                };
                
                if (existingProduct) {
                    toast.success(`${product.title} de área ${area}m² já está no carrinho. Quantidade atualizada.`);
                    return prevCart.map(item =>
                        item.id === uniqueId
                            ? { 
                                ...productForCart,
                                quantity: item.quantity + 1
                            }
                            : item
                    );
                }
    
                let successMessage = `Produto "${product.title}" de área ${area}m²`;
                if (product.type === "MT113") {
                    successMessage += ` e espessura de ${thickness} adicionado ao carrinho.`;
                    // successMessage += ` Preço total: ${finalPrice.toFixed(2)}€ (produto: ${productDetails.basePrice.toFixed(2)}€ + espessura: ${productDetails.thicknessCost.toFixed(2)}€ + cola: ${productDetails.glueCost.toFixed(2)}€ + envio: ${productDetails.shippingCost.toFixed(2)}€)`;
                } else {
                    successMessage += ` adicionado ao carrinho.`;
                }
                
                toast.success(successMessage);
                return [...prevCart, productForCart];
            });
        }
    };    
    
    const updateCart = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
        toast.success("Carrinho atualizado!")
    };

    const removeFromCart = (productId) => {
        const removedProduct = cart.find(item => item.id === productId);
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
        toast.success(`${removedProduct.title} foi removido do carrinho.`);
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
        <CartContext.Provider value=
            {{
                cart,
                addToCart,
                addSquareMeterToCart,
                updateCart,
                removeFromCart,
                cartCountItems,
                updateCartItems,
                getCartAmount,
                // shipping_fee
            }}>
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
