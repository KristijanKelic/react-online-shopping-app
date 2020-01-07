import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selector';

import CartContext from '../../contexts/cart/cart.context';

import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  LinkOption
} from './header.styles';

const Header = ({ currentUser, signOutStart }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <LinksContainer>
        <LinkOption to="/shop">SHOP</LinkOption>
        <LinkOption to="/contact">CONTACT</LinkOption>
        {currentUser ? (
          <LinkOption as="div" to="/" onClick={() => signOutStart()}>
            {currentUser.displayName} (SIGN OUT)
          </LinkOption>
        ) : (
          <LinkOption to="/signin">SIGN IN</LinkOption>
        )}
        <CartContext.Provider value={{ hidden, toggleHidden }}>
          <CartIcon />
        </CartContext.Provider>
      </LinksContainer>
      {hidden ? null : (
        <CartContext.Provider value={{ hidden, toggleHidden }}>
          <CartDropdown />
        </CartContext.Provider>
      )}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
