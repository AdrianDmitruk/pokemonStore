export interface AuthResponse {
  _id: string;
  accessToken: string | null;
  email: string;
  password: string;
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

export type AuthSliceState = {
  data: AuthResponse;
  status: Status;
};

export interface IAuthData {
  email: string;
  password: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  address?: {
    addressLine1: string;
    addressLine2: string;
    country: string;
    city: string;
  };
}
