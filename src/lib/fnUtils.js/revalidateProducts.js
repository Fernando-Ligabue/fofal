export const revalidateProducts = (changeProductType, productType, interval = 5000) => {

  const id = setInterval(() => {
    changeProductType(productType);
  }, interval);

  return () => {
    clearInterval(id);
  };
};