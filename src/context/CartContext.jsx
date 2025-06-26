/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import { calculateBT200, calculateBTIndoor, calculateDefault, calculateAlcatifas, calculateMT113 } from "@/lib/fnUtils.js/calculates";
import { resolvePrice } from "@/lib/fnUtils.js/resolvers";

export const  CartContext = createContext();

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

    const addCustomAutoCarpetToCart = (customData) => {
        const selectedPositions = customData.selectedMats || {};
        const selectedCount = Object.values(selectedPositions).filter(Boolean).length;

        if (selectedCount === 0) {
            toast.error("Por favor, selecione pelo menos um tapete para adicionar ao carrinho.");
            return;
        }

        if (!customData.marca || !customData.modelo || !customData.ano) {
            toast.error("Por favor, preencha os dados do veículo (marca, modelo e ano) antes de adicionar ao carrinho.");
            return;
        }

        if (!customData.material) {
            toast.error("Por favor, selecione o material dos tapetes.");
            return;
        }

        const materialPrices = {
            'basic': {
                'full_set': 33.00,
                'fronts': 22.00,
                'unique_front': 33.00,
                'driver': 13.00,
                'passenger': 11.00,
                'rear_separate': 13.00,
                'rear_unique': 15.00
            },
            'eco': {
                'full_set': 50.00,
                'fronts': 33.00,
                'unique_front': 50.00,
                'driver': 19.00,
                'passenger': 17.00,
                'rear_separate': 25.00,
                'rear_unique': 28.00
            },
            'veludo': {
                'full_set': 72.00,
                'fronts': 50.00,
                'unique_front': 72.00,
                'driver': 28.00,
                'passenger': 24.00,
                'rear_separate': 39.00,
                'rear_unique': 44.00
            },
            'mercedes': {
                'full_set': 77.00,
                'fronts': 55.00,
                'unique_front': 77.00,
                'driver': 30.00,
                'passenger': 28.00,
                'rear_separate': 44.00,
                'rear_unique': 50.00
            },
            'veludo-twist': {
                'full_set': 83.00,
                'fronts': 61.00,
                'unique_front': 83.00,
                'driver': 33.00,
                'passenger': 31.00,
                'rear_separate': 45.00,
                'rear_unique': 55.00
            },
            'veludo-cores': {
                'full_set': 94.00,
                'fronts': 72.00,
                'unique_front': 94.00,
                'driver': 39.00,
                'passenger': 36.00,
                'rear_separate': 50.00,
                'rear_unique': 61.00
            },
            'confortmix': {
                'full_set': 100.00,
                'fronts': 66.00,
                'unique_front': 100.00,
                'driver': 38.00,
                'passenger': 38.00,
                'rear_separate': 100.00,
                'rear_unique': 100.00
            },
            'rubber-hexa': {
                'full_set': 100.00,
                'fronts': 60.00,
                'unique_front': 100.00,
                'driver': 35.00,
                'passenger': 35.00,
                'rear_separate': 60.00,
                'rear_unique': 100.00
            },
            'rubber-flex': {
                'full_set': 100.00,
                'fronts': 60.00,
                'unique_front': 100.00,
                'driver': 35.00,
                'passenger': 35.00,
                'rear_separate': 60.00,
                'rear_unique': 100.00
            }
        };

        const extraPrices = {
            'fixacoes': 1.50,
            'espigoes': 1.00,
            'bordado': 10.00,
            'debruado_fiolã': 0,
            'debruado_nobuk': {
                'full_set': 20.00,
                'fronts': 15.00,
                'individual': 8.00
            },
            'debruado_napel': {
                'full_set': 20.00,
                'fronts': 15.00,
                'individual': 8.00
            }
        };

        let configurationType = '';
        let totalPrice = 0;

        const {
            frontLeft = false,
            frontRight = false,
            rearLeft = false,
            rearRight = false
        } = selectedPositions;

        const isFrontLeft = Boolean(frontLeft);
        const isFrontRight = Boolean(frontRight);
        const isRearLeft = Boolean(rearLeft);
        const isRearRight = Boolean(rearRight);

        if (isFrontLeft && isFrontRight && isRearLeft && isRearRight) {
            configurationType = 'full_set';
        } else if (isFrontLeft && isFrontRight && !isRearLeft && !isRearRight) {
            configurationType = 'fronts';
        } else if ((isFrontLeft && !isFrontRight && !isRearLeft && !isRearRight) ||
            (!isFrontLeft && isFrontRight && !rearLeft && !rearRight)) {
            configurationType = frontLeft ? 'driver' : 'passenger';
        } else if (!isFrontLeft && !isFrontRight && rearLeft && rearRight) {
            configurationType = 'rear_separate';
        } else if (selectedCount === 3) {
            configurationType = 'unique_front';
        } else {
            let price = 0;
            if (isFrontLeft) price += materialPrices[customData.material]['driver'];
            if (isFrontRight) price += materialPrices[customData.material]['passenger'];
            if (rearLeft || rearRight) {
                if (rearLeft && rearRight) {
                    price += materialPrices[customData.material]['rear_separate'];
                } else {
                    price += materialPrices[customData.material]['rear_separate'] / 2;
                }
            }
            totalPrice = price;
            configurationType = 'custom';
        }

        if (configurationType !== 'custom') {
            totalPrice = materialPrices[customData.material][configurationType];
        }

        if (customData.fixacoes) {
            const fixacoesCount = selectedCount * 4;
            totalPrice += extraPrices['fixacoes'] * fixacoesCount;
        }

        if (customData.espigoes && ['basic', 'eco', 'veludo', 'mercedes', 'veludo-twist', 'veludo-cores'].includes(customData.material)) {
            const espigoesCount = selectedCount * 2;
            totalPrice += extraPrices['espigoes'] * espigoesCount;
        }

        if (customData.bordado && !['confortmix', 'rubber-hexa', 'rubber-flex'].includes(customData.material)) {
            totalPrice += extraPrices['bordado'] * selectedCount;
        }

        if (customData.acabamento) {
            if (['debruado_nobuk', 'debruado_napel'].includes(customData.acabamento)) {
                let debruadoPrice = 0;

                if (!['rubber-hexa', 'rubber-flex', 'mercedes', 'confortmix'].includes(customData.material)) {
                    if (configurationType === 'full_set') {
                        debruadoPrice = extraPrices[customData.acabamento]['full_set'];
                    } else if (configurationType === 'fronts') {
                        debruadoPrice = extraPrices[customData.acabamento]['fronts'];
                    } else {
                        debruadoPrice = extraPrices[customData.acabamento]['individual'] * selectedCount;
                    }

                    totalPrice += debruadoPrice;
                }
            }
        }

        const positionNames = {
            'frontLeft': 'Condutor',
            'frontRight': 'Passageiro',
            'rearLeft': 'Traseiro esquerdo',
            'rearRight': 'Traseiro direito'
        };

        const selectedPositionNames = Object.entries(selectedPositions)
            .filter(([_, value]) => value)
            .map(([key, _]) => positionNames[key])
            .join(", ");

        let productTitle;
        if (configurationType === 'full_set') {
            productTitle = `Conjunto completo de tapetes para ${customData.marca} ${customData.modelo} (${customData.ano})`;
        } else if (configurationType === 'fronts') {
            productTitle = `Tapetes frente para ${customData.marca} ${customData.modelo} (${customData.ano})`;
        } else {
            productTitle = `Tapetes personalizados (${selectedPositionNames}) para ${customData.marca} ${customData.modelo} (${customData.ano})`;
        }

        const uniqueId = `custom-carpet-${customData.marca}-${customData.modelo}-${customData.ano}-${Date.now()}`;

        const customCarpetProduct = {
            id: uniqueId,
            title: productTitle,
            price: totalPrice,
            quantity: 1,
            type: "custom-carpet",
            carData: {
                marca: customData.marca,
                modelo: customData.modelo,
                ano: customData.ano
            },
            materialType: customData.material,
            selectedPositions: { ...selectedPositions },
            cores: customData.cores || [],
            productDetails: {
                basePrice: totalPrice,
                material: customData.material,
                posicoes: selectedPositionNames,
                shippingCost: customData.shippingCost || 0
            }
        };

        if (customData.acabamento) {
            customCarpetProduct.acabamento = customData.acabamento;
            customCarpetProduct.productDetails.acabamentoType = customData.acabamento;
        }

        if (customData.reforco) {
            customCarpetProduct.reforco = true;
            customCarpetProduct.productDetails.reforco = "Sim";
        }

        if (customData.fixacoes) {
            customCarpetProduct.fixacoes = true;
            customCarpetProduct.productDetails.fixacoes = "Sim";
        }

        if (customData.bordado) {
            customCarpetProduct.bordado = true;
            customCarpetProduct.productDetails.bordado = "Sim";
        }

        if (customData.espigoes) {
            customCarpetProduct.espigoes = true;
            customCarpetProduct.productDetails.espigoes = "Sim";
        }

        if (customData.shippingCost && customData.shippingCost > 0) {
            customCarpetProduct.price += customData.shippingCost;
        }

        setCart((prevCart) => [...prevCart, customCarpetProduct]);

        toast.success(`${productTitle} adicionado ao carrinho.`);
        console.log(customCarpetProduct);
        return customCarpetProduct;
    };

    const addSquareMeterToCart = async ( product, width = 0, height = 0, thickness = "", color = "" ) => {
        if (!product.isSoldPerSquareMeter) return;
    
        // Verificação de largura máxima
        if (width > 2 && height > 2) {
            toast.error("Para medidas superiores a 2m, por favor contacte-nos pelo email: comercial@fofal.pt");
            return;
        }
    
        let result;
    
        toast.loading("Por favor aguarde...");
    
        switch (product.type) {
            case "Holmes":
                result = await calculateAlcatifas(product, width, height, thickness ?? "2.5");
                break;
            case "Plat":
                result = await calculateAlcatifas(product, width, height, thickness ?? "2.5");
                break;
            case "Salsa":
                result = await calculateAlcatifas(product, width, height, thickness ?? "2.5");
                break;
            case "BT INDOOR":
                result = calculateBTIndoor(product, width, height);
                break;
            case "BT200":
                result = calculateBT200(product, width, height);
                break;
            case "MT113":
                result = calculateMT113(product, width, height, thickness);
                break;
            default:
                result = calculateDefault(product, width, height);
        }
    
        toast.dismiss();
        if (!result) return;
    
        const productPrice = result.finalPrice ?? result.price;
        const fallbackPrice = resolvePrice(product, width, height);
        const price = parseFloat(productPrice ?? fallbackPrice);
    
        if (isNaN(price)) {
            toast.error("Preço inválido recebido do servidor.");
            return;
        }
    
        const productDetails = result.productDetails ?? {};
    
        const uniqueId = `${product.id}-${width}-${height}-${thickness}-${color}`;
    
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === uniqueId);
    
            const productForCart = {
                ...product,
                id: uniqueId,
                quantity: 1,
                price,
                width,
                height,
                thickness,
                color,
                productDetails
            };
    
            if (existingProduct) {
                toast.success(`${product.title} já está no carrinho. Quantidade atualizada.`);
                return prevCart.map(item =>
                    item.id === uniqueId
                        ? { ...productForCart, quantity: item.quantity + 1 }
                        : item
                );
            }
    
            toast.success(`Produto "${product.title}" adicionado ao carrinho.`);
            return [...prevCart, productForCart];
        });
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
                addCustomAutoCarpetToCart,
            }}>
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
