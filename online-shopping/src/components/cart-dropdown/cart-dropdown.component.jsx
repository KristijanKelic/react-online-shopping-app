import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { CartContext } from '../../providers/cart/cart.provider';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ history }) => {
  const { toggleHidden } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      {cartItems.length > 0 ? (
        <CustomButton
          onClick={() => {
            history.push('/checkout');
            toggleHidden();
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      ) : null}
    </div>
  );
};

export default withRouter(CartDropdown);
