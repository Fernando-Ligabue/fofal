import toast from "react-hot-toast";
import axios from 'axios';

// calculations/alcatifas
export const calculateAlcatifas = async (product, width, height, thickness) => {
    try {
        if (width > 2 && height > 2) {
            toast.error("Para medidas superiores a 2m, por favor contacte-nos pelo email: comercial@fofal.pt");
            return null;
        }
        const defaultThicknessByType = {
            Holmes: "2.5",
            Plat: "2.5",
            Salsa: "5"
        };

        const effectiveThickness = thickness || defaultThicknessByType[product.type] || "2.5";

        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/loja/alcatifas/calculapreco`, {
            productType: product.type,
            setor: product.setor || "",
            largura: width,
            comprimento: height,
            espessura: effectiveThickness
        });
        if (response.status === 200 && response.data) {
            return {
                price: parseFloat(response.data.preco) || 0,
                productDetails: {
                    basePrice: response.data.preco_base || 0,
                    shippingCost: response.data.preco_envio || 0,
                    glueCost: response.data.preco_cola || 0,
                    thicknessCost: response.data.preco_espessura || 0
                }
            };
        } else {
            throw new Error("Resposta inesperada do backend.");
        }
    } catch (error) {
        console.error("Erro ao calcular alcatifa:", error);
        toast.error("Ocorreu um erro. Tente novamente ou contacte a loja em comercial@fofal.pt");
        return null;
    }
};

export const calculateAlcatifasHome = () =>{
    return alert("Cheguei aqui")
}

// calculations/btIndoor
export const calculateBTIndoor = (product, width, height) => {
    const validWidths = [0.85, 1.15, 1.5, 2];
    const maxLength = 5;

    if (!validWidths.includes(width)) {
        toast.error("Largura inválida para BT INDOOR. Use: 0.85m, 1.15m, 1.5m ou 2m.");
        return null;
    }

    if (height > maxLength) {
        toast.error("O comprimento máximo é 5m. Entre em contato pelo email: comercial@fofal.pt");
        return null;
    }

    const area = width * height;
    const finalPrice = area * product.price;

    return {
        finalPrice,
        productDetails: {
            basePrice: finalPrice,
            shippingCost: 0,
            glueCost: 0,
            thicknessCost: 0
        }
    };
};

// calculations/bt200
export const calculateBT200 = (product, width, height) => {
    if (width > 2 || height > 5) {
        toast.error("As medidas máximas para BT200 são 2m x 5m. Para tamanhos personalizados entre em contato pelo email: comercial@fofal.pt");
        return null;
    }

    const area = width * height;
    const finalPrice = area * product.price;

    return {
        finalPrice,
        productDetails: {
            basePrice: finalPrice,
            shippingCost: 0,
            glueCost: 0,
            thicknessCost: 0
        }
    };
};

// calculations/mt113
export const calculateMT113 = (product, width, height, thickness = "") => {
    const area = width * height;

    if (area <= 0) {
        toast.error("Área inválida.");
        return null;
    }

    if (!thickness || thickness.trim() === "") {
        toast.error("Forneça uma espessura válida para o produto MT113.");
        return null;
    }

    let thicknessMin, thicknessMax;
    const thicknessStr = String(thickness);

    if (thicknessStr.includes("-")) {
        const [min, max] = thicknessStr.split("-");
        thicknessMin = parseFloat(min);
        thicknessMax = parseFloat(max);
    } else {
        thicknessMin = parseFloat(thicknessStr);
        thicknessMax = thicknessMin;
    }

    if (isNaN(thicknessMin) || isNaN(thicknessMax)) {
        toast.error("Espessura inválida.");
        return null;
    }

    let thicknessPricePerMeter = 0;

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
        toast.error("Espessura fora dos valores permitidos.");
        return null;
    }

    const thicknessCost = thicknessPricePerMeter * area;
    const glueCost = 30.75;
    const basePrice = product.price * area;
    const finalPrice = basePrice + thicknessCost + glueCost;

    return {
        finalPrice,
        productDetails: {
            basePrice,
            thicknessCost,
            glueCost,
            shippingCost: 0
        }
    };
};

// calcuations/default
export const calculateDefault = (product, width, height) => {
    const area = width * height;

    if (area <= 0) {
        toast.error("Medidas de área inválida. Por favor indique as medidas de largura e comprimento.");
        return null;
    }

    const basePrice = area * product.price;

    return {
        finalPrice: basePrice,
        productDetails: {
            basePrice,
            shippingCost: 0,
            glueCost: 0,
            thicknessCost: 0
        }
    };
};