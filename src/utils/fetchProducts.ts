import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { fetchWrapper } from "./fetchWrapper";

export interface ProductsResponse {
  products: Array<Omit<ProductDTO, "price"> & { price: string }>;
  count: number;
}

export function fetchProducts(perPage: number, options?: RequestInit) {
  return fetchWrapper<ProductsResponse>(
    `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC`,
    options,
  );
}
