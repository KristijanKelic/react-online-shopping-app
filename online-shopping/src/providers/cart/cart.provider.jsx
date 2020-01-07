import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToCartUtil,
  removeItemFromCartUtil,
  clearItemFromCartUtil,
  getCartItemsCount,
  getCartItemsPrice
} from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItems: () => {},
  cartItemsCount: 0,
  total: 0
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = item => setCartItems(addItemToCartUtil(cartItems, item));
  const removeItem = item =>
    setCartItems(removeItemFromCartUtil(cartItems, item));
  const clearItems = item =>
    setCartItems(clearItemFromCartUtil(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setTotal(getCartItemsPrice(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        addItem,
        cartItems,
        cartItemsCount,
        removeItem,
        clearItems,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
