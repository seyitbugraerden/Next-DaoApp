import { blog } from "./blog";

export interface blogData {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: blog[];
}
