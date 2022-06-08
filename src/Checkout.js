import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'


const Checkout = () => {

    const [{ basket, user }, dispatch] = useStateValue();
    
  return (
    <div className='checkout'>
        <div className = "checkout__left">
            <img 
                className='checkout__ad' 
                src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt = " ">
            
            </img>

            <div>
                <h3>Hello, {/*user.email*/}</h3>
                <h2 className='checkout__title'>Your Shopping Basket</h2>

                   
                    {/*<CheckoutProduct 
                            id = '112342'
                            title = 'This is a test'
                            image = "https://m.media-amazon.com/images/I/818xqXXPZlL._AC_SX679_.jpg"
                            price = {199.99}
                            rating = {5}
                        />*/}
                        
                    
                    {/*  */}


                    {basket.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                    
                
                { /* Basket Item */ }
                { /* Basket Item */ }
                { /* Basket Item */ }
                { /* Basket Item */ }
                { /* Basket Item */ }
            </div>
        </div>
       
       
       
       
      
      
      
      
      
       
       
        <div className = "checkout__right">
            <Subtotal /> 
        </div>  
    </div>
  )
}

export default Checkout