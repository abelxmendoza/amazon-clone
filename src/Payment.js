import React, { useState } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

const Payment = () => {
  
  const [{ basket, user }, dispatch] = useStateValue();
  
  const stripe = useStripe();
  const elements = useElements();
  
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

    const handleSubmit = async (event) => {
        //do all the fancy stripe stuff...

    }

    const handleChange = e => {
        // Listen for changes in the CardElement 
        // and display any errors as the customers types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }


  
    return (
    
    <div className='payment'>
        <div className='payment__container'>

            <h1>
                Checkout (
                    <Link to = "/checkout">{basket?.length} items</Link>
                )
            </h1>



            {/* Payment section - delivery address */}
            {/* Payment section - Review Items */}
            {/* Payment section - Payment */}

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>

                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>

            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>

                <div className='payment-items'>
                    {basket.map(item => (

                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
                
            </div>

            <div className='payment__section'>
                <div className='payment__title'>
                        <h3>Payment Method</h3>
                </div>
                
                <div className='payment__details'>
                    {/* Stripe magic will go here */}

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={ handleChange }/>

                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale = {2}
                                value = {getBasketTotal(basket)}
                                displayType = {"text"}
                                thousandSeparator = {true}
                                prefix = {"$"}
                            />
                            <button disabled = {processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                       {/* Errors */}
                       {error && <div>{error}</div>}

                    </form>

                </div>
                
            </div>


        </div>
    </div>
  )
}

export default Payment