import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="links-container">
        <Link to="/shop" className="link">
          SHOP
        </Link>
        <Link to="/contact" className="link">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="link" onClick={() => auth.signOut()}>
            {currentUser.displayName} (SIGN OUT)
          </div>
        ) : (
          <Link className="link" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
