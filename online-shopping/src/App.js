import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import GlobalStyle from './global.styles';

import { checkUserSession } from './redux/user/user.actions';

// import { addCollectionAndDocuments } from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/user/user.selector';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/home/home.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndUpPage = lazy(() =>
  import('./pages/sign-in-up/sign-in-up.component')
);

// NOTE: Code that is commented here is to store collections data to firebase
// Because there is no updating actions on those items there is no need to run this code on every app startup
// To see data from your firebase uncomment the code run it and then comment again
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
    /* addCollectionAndDocuments(
          'collections',
          collectionsArray.map(({ title, items }) => ({ title, items }))
        ); */
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
