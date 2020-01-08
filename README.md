# OnlineShoppingApp

React practice.

Also review of:

- firebase
- react-router-dom
- redux/redux-logger/react-redux
- reselect
- redux-persist
- styled-components (CSS in JS)
- redux-thunk (async redux)
- redux-saga (async redux, replace for thunk)
- React Hooks
- Context API

## Firebase (<https://firebase.google.com/)>

I used firebase to establish google auth and storing users to firestore.
To make it work you will need to provide your config object.

Inside src/firebase/ create firebase.config.js file and export an object that looks like:

```
const config = {
  apiKey: '~',
  authDomain: '~',
  databaseURL: '~,
  projectId: '~',
  storageBucket: '~',
  messagingSenderId: '~',
  appId: '~',
  measurementId: '~'
};

export default config;
```
Replace ~ with your data.

## Stripe (<https://stripe.com/gb)>

I used stripe to fake online payment (test mode)

Inside src/components/stripe-button replace public key with your own:

```
const publishableKey = 'pk_test_mmfEVYMZ6pXcFNXmDxS5GMAx00OYdFOuZn';
```

TO make backend stripe payment handling work create .env in root (next to README and gitignore) and add:

```
STRIPE_SECRET_KEY=~
```

Replace ~ with your secret key that you get from stripe.