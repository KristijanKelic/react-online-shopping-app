import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  // Stripe needs price in cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_mmfEVYMZ6pXcFNXmDxS5GMAx00OYdFOuZn';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(res => {
        alert('Payment successful');
      })
      .catch(err => {
        console.log('Payment error: ', err.message);
        alert('There was an error with payment');
      });
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
