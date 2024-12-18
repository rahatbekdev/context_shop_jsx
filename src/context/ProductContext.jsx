/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { category } = useParams();

  // console.log(products);

  const getProducts = async (category) => {
    try {
      setLoading(true);
      let URL = "https://fakestoreapi.com/products";
      if (category) {
        URL += `/category/${category}/?limit=4`;
      } else {
        URL += "?limit=4";
      }

      const res = await fetch(URL);
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(category);
  }, [category]);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
