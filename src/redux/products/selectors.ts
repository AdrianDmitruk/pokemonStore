import { createSelector } from "reselect";
import { RootState } from "../store";

const selectData = (state: RootState) => state.products.data;
const selectSearchQuery = (state: RootState) => state.products.searchQuery;
const selectStatus = (state: RootState) => state.products.status;
const selectPriceFrom = (state: RootState) => state.products.priceFrom;
const selectPriceTo = (state: RootState) => state.products.priceTo;

const selectFilteredData = createSelector(
  selectData,
  selectSearchQuery,
  selectPriceFrom,
  selectPriceTo,
  (data, searchQuery, priceFrom, priceTo) => {
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

    return filteredData;
  }
);

export const selectProductsData = createSelector(
  selectFilteredData,
  selectStatus,
  (filteredData, status) => {
    return {
      data: filteredData,
      status,
    };
  }
);
