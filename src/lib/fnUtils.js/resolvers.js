// eslint-disable-next-line no-unused-vars
export function resolvePrice(product, width, height) {
    if (
        product.type === "Holmes" &&
        typeof product.price === "object" &&
        !Array.isArray(product.price)
    ) {
        const key = width.toString();
        if (product.price[key]) return parseFloat(product.price[key]);
    }

    if (Array.isArray(product.price)) {
        return parseFloat(product.price[0]);
    }

    if (typeof product.price === "number") {
        return product.price;
    }

    return NaN;
}
