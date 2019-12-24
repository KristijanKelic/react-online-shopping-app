# OnlineShoppingApp

React practice

## Firebase (https://firebase.google.com/)

I used firebase to establish google auth and some storage.
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
