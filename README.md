# OnlineShoppingApp

React practice.

Also review of:

- firebase
- react-router-dom
- redux/redux-logger/react-redux
- reselect
- redux-presist
- CSS in JS (styled-components)

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

```
Inside src/components/stripe-button make sure you use your own stripe public key:

const publishableKey = 'pk_test_mmfEVYMZ6pXcFNXmDxS5GMAx00OYdFOuZn';
```

Replace ~ with your data.
