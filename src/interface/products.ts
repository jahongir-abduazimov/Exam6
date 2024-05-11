export interface GetProduct {
  limit: number;
  page: number;
}
export interface ProductsStore {
  data: any[];
  isLoading: boolean;
  getData: (params: GetProduct) => Promise<any>;
}
export interface Request {
  get_products: (data: GetProduct) => any;
}
