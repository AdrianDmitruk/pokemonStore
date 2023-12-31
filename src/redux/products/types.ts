export interface Products {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  products: ProductsItems[];
}

export interface ProductsItems {
  _id: string;
  id: string;
  image: string;
  name: string;
  price: number;
  abilities: {
    description: string;
    title: string;
  }[];
  stats: {
    value: string;
    title: string;
  }[];
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type ProductsSliceState = {
  data: Products;
  searchQuery: string;
  priceFrom: number | null;
  priceTo: number | null;
  status: Status;
};

export type IProductsParams = {
  page: number;
  limit: number;
  name: string;
  priceFrom?: number;
  priceTo?: number;
};
