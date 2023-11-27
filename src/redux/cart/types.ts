export interface Cart {
  quantity: number;
  totalPrice: number;
  itemsList: {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
  }[];
}

export interface AddItemToCart {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface AddItemRespons {
  cartState: {
    quantity: number;
    totalPrice: number;
  };
  updatedItem: AddItemToCart;
}

export interface RemoveItemRespons {
  cartState: {
    quantity: number;
    totalPrice: number;
  };
  removedItemId: number;
}

export interface UpdateItemInCart {
  id: number;
  quantity: number;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type CartSliceState = {
  data: Cart;
  status: Status;
};
