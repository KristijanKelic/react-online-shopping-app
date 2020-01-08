import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { CartContext } from '../../providers/cart/cart.provider';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ history }) => {
  const { toggleHidden } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length > 0 ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      {cartItems.length > 0 ? (
        <CartDropdownButton
          onClick={() => {
            history.push('/checkout');
            toggleHidden();
          }}
        >
          GO TO CHECKOUT
        </CartDropdownButton>
      ) : null}
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
