// Util function to modify cartItems array to prevent multiplication of same item
// Instead increment quantity property
export const addItemToCartUtil = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => cartItemToAdd.id === item.id);

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
