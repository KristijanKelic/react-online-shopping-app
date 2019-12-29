import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // Stripe needs price in cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_mmfEVYMZ6pXcFNXmDxS5GMAx00OYdFOuZn';

  const onToken = token => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="eShop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
