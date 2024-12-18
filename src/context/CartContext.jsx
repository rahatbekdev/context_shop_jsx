/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  // console.log(cartItems);

  //
  // Add Item to Cart
  const addToCart = (product) => {
    const existingItem = cartItems.findIndex((item) => item.id === product.id);

    product.quantity = product.quantity || 1;
    if (existingItem !== -1) {
      const updateItems = [...cartItems];
      updateItems[existingItem].quantity += 1;
      setCartItems(updateItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // Remove from Cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Remove quantity
  const removeQuantity = (productId) => {
    const existingItem = cartItems.findIndex((item) => item.id === productId);

    if (existingItem !== -1) {
      const updateItems = [...cartItems];
      updateItems[existingItem].quantity -= 1;
      if (updateItems[existingItem].quantity === 0) {
        removeFromCart(productId);
      } else {
        setCartItems(updateItems);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, removeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
