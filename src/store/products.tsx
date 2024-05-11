import { create } from "zustand";
import { product } from "@service";
import { ProductsStore } from "../interface/products";

const useProductsStore = create<ProductsStore>((set) => ({
  data: [],
  isLoading: false,
  getData: async (params:any) => {
    try {
      set({ isLoading: true });
      const response = await product.get_products(params);
      if (response.status === 200) {
        response?.data?.products?.forEach((item: any, index: number) => {
          item.index = index + 1;
        });
        set({ data: response?.data?.products });
      }
      set({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useProductsStore;
