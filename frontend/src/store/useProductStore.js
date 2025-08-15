import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

// base url will be dynamic depending on the environment
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:3000" : "";

export const useProductStore = create((set, get) => ({
  // products state
  products: [],
  loading: false,
  error: null,
  currentProduct: null,

  // form state
  formData: {
    name: "",
    price: "",
    image: "",
  },

  setFormData: (formData) => set({ formData }),
  resetForm: () => set({ formData: { name: "", price: "", image: "" } }),

  addProduct: async (e) => {
    e.preventDefault();
    set({ loading: true });

    try {
      const { formData } = get();
      await axios.post(`${BASE_URL}/api/products`, formData);
      await get().fetchProducts();
      get().resetForm();
      toast.success("Product added successfully");
      document.getElementById("add_product_modal").close();
    } catch (error) {
      console.log("Error in addProduct function", error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products`);
      set({ products: response.data, error: null }); // FIX: Used response.data directly
    } catch (err) {
      if (err.response && err.response.status === 429) {
        set({
          error: "Rate limit exceeded, please try again later.",
          products: [],
        });
      } else {
        set({
          error: "Something went wrong while fetching products.",
          products: [],
        });
      }
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`);
      set((prev) => ({
        products: prev.products.filter((product) => product.id !== id),
      }));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.log("Error in deleteProduct function", error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

  fetchProduct: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products/${id}`);
      set({
        currentProduct: response.data, // FIX: Used response.data directly
        formData: response.data, // pre-fill form with current product data
        error: null,
      });
    } catch (error) {
      console.log("Error in fetchProduct function", error);
      set({ error: "Something went wrong", currentProduct: null });
    } finally {
      set({ loading: false });
    }
  },

  // ====================================================================
  // THIS IS THE CORRECTED FUNCTION
  // ====================================================================
  updateProduct: async (id) => {
    set({ loading: true });
    try {
      const { formData } = get();
      // The API returns the updated product object in response.data
      const response = await axios.put(
        `${BASE_URL}/api/products/${id}`,
        formData
      );

      // This `set` function updates the state
      set((state) => ({
        // 1. Update the `currentProduct` for the edit page
        currentProduct: response.data,

        // 2. Update the `products` array for the home page
        // It maps over the old array. When it finds the product with the matching id,
        // it replaces it with the new data from the server response.
        products: state.products.map((product) =>
          product.id === parseInt(id) ? response.data : product
        ),
      }));

      toast.success("Product updated successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Error in updateProduct function", error);
    } finally {
      set({ loading: false });
    }
  },
}));
export default useProductStore;