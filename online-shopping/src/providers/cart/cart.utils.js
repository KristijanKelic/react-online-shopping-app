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

// Removes item from cart no matter what quantity is
export const clearItemFromCartUtil = (cartItems, cartItemToClear) => {
  return cartItems.filter(item => item.id !== cartItemToClear.id);
};

// Reduces quantity on item
export const removeItemFromCartUtil = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1)
    return clearItemFromCartUtil(cartItems, cartItemToRemove);

  return cartItems.map(item =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

// Calculates the number of items
export const getCartItemsCount = cartItems =>
  cartItems.reduce(
    (accuQuantity, cartItem) => accuQuantity + cartItem.quantity,
    0
  );

// Calculates price of items
export const getCartItemsPrice = cartItems =>
  cartItems.reduce(
    (accuQuantity, cartItem) =>
      accuQuantity + cartItem.quantity * cartItem.price,
    0
  );
