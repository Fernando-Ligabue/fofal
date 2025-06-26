export function getFormattedPrice(product) {
    const { price } = product;
  
    if (typeof price === "number") {
      return `€ ${price.toFixed(2)}`;
    }
  
    if (typeof price === "object" && price !== null) {
      const firstKey = Object.keys(price)[0];
      if (firstKey && typeof price[firstKey] === "number") {
        return `€ ${price[firstKey].toFixed(2)}`;
      }
    }
  
    return "Preço sob consulta";
  }