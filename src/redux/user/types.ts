export interface User {
  _id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: {
    addressLine1: string;
    addressLine2: string;
    country: string;
    city: string;
  };
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type UserSliceState = {
  data: User;
  status: Status;
};
