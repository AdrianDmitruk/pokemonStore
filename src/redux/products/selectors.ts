import { RootState } from "../store";

export const selectProductsData = (state: RootState) => {
  const { data, searchQuery, status, priceFrom, priceTo } = state.products;
  const lowercaseSearchQuery = searchQuery.toLowerCase();

  let filteredData = data;

  if (lowercaseSearchQuery) {
    filteredData = filteredData.filter((product) =>
      product.name.toLowerCase().includes(lowercaseSearchQuery)
    );
  }

  if (priceFrom !== null || priceTo !== null) {
    filteredData = filteredData.filter((product) => {
      if (priceFrom !== null && priceTo !== null) {
        if (priceFrom <= priceTo) {
          return product.price >= priceFrom && product.price <= priceTo;
        } else {
          return (
            product.price >= priceFrom ||
            (priceTo !== null && product.price <= priceTo)
          );
        }
      } else if (priceFrom !== null) {
        return product.price >= priceFrom;
      } else {
        return priceTo !== null && product.price <= priceTo;
      }
    });
  }

  return {
    data: filteredData,
    status,
  };
};
