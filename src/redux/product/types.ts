import { Products } from "../products/types";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type ProductSliceState = {
  data: Products;
  status: Status;
};
