import { ProductsItems } from "../products/types";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type ProductSliceState = {
  data: ProductsItems;
  status: Status;
};
