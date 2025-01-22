import axios from "axios";
import { create } from "zustand"

const productStore = (set) =>({
  products:[],
  actionGetData: async()  => {
    try {
      const resp = await axios.get('https://dummyjson.com/products')
      // console.log(resp.data.products)
      set({products: resp.data.products})
    } catch (error) {
      console.log(error.message)
    }
  },
});

const useProductStore = create(productStore)
export default useProductStore;