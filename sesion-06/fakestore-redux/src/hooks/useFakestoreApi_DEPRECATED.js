
import { useState } from "react";
import { useReducer } from "react";

export const useFakestoreApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url, action) => {
    const result = await axios.get(url);
    return result.data;
  };

  const getProducts = async () => {
    try {
      setLoading(true);
      const url = "https://fakestoreapi.com/products";
      const result = await fetchData(url, "GET_PRODUCTS");
      setData(result);
    } catch (error) {
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getProducts };
};
