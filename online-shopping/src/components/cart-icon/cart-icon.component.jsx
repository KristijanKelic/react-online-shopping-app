import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import {
  CartContainer,
  ItemCountContainer,
  ShoppingIcon
} from './cart-icon.styles';

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <CartContainer onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
