/* eslint-disable no-unused-vars */
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
                let thicknessPricePerMeter = 0;

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
                addCustomAutoCarpetToCart,
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
