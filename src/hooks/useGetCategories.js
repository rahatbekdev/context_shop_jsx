import { useEffect } from "react";
import { useState } from "react";

const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products/categories");

      if (res.ok) {
        const data = await res.json();
        setCategories(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return { categories, loading };
};

export default useGetCategories;
