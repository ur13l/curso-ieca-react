import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useState } from "react";
import { useReducer } from "react";
import { db } from "../main";

export const useFakestoreApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      const res = await query(
        collection(db, "products"),
        orderBy("title", "asc")
      );

      return onSnapshot(res, (querySnapshot) => {
        setData(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } catch (error) {
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  const storeNewProduct = async (product) => {
    try {
      setLoading(true);
      const res = await addDoc(collection(db, "products"), product);
      return res;
    } catch (error) {
      throw new Error("Error al guardar producto");
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, getProducts, storeNewProduct };
};
