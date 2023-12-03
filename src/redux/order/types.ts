export interface Order {
  createdAt: string;
  totalPrice: number;
  itemsList: {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
  }[];
}

export interface AddOrder {
  customerId: string;
  totalPrice: number;
  itemsList: {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
  }[];
}

interface OrderItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderReq {
  createdAt: string;
  totalPrice: number;
  itemsList: OrderItem[];
}

export interface CustomerOrder {
  customerId: string;
  _id: string;
  orders: OrderReq[];
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type OrderSliceState = {
  data: Order[];
  status: Status;
};
