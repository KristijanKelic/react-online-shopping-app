// import SHOP_DATA from './shop.data';

import ShopActionTypes from './shop.types';

// SHOP_DATA is not necessary because data is retrieved from firebase
// Unless you didn't do that uncomment in App.js
const INITIAL_STATE = {
  collections: null // SHOP_DATA (replace with null)
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
