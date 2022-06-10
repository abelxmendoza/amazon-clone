import React from 'react'
import "./Home.css"
import Product from "./Product"
import Header from "./Header";


function Home() {
  return (
    <div className='home'>

       
        <div className='home__container'>
            <img 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=''    
            />

            <div className='home__row'>
                <Product 
                    id = "12321341"
                    title = "The Lean Startup"
                    price = {29.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating = {5}    
                />
                <Product 
                    id = "49538094"
                    title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price = {239.00}
                    image = "https://www.220-electronics.com/media/catalog/product/cache/06e563bb4bf8bb99ff5c3485d61b5ba4/k/e/kenwood-kmix-kmx51-mixer.jpg"
                    rating = {4}    
                />
            

            </div>

            <div className='home__row'>
                <Product 
                     id = "19621731"
                     title = "TOURIT Cooler Backpack 30 Cans Lightweight Insulated Backpack Cooler Leak-Proof"
                     price = {29.59}
                     image = "https://m.media-amazon.com/images/I/818xqXXPZlL._AC_SX679_.jpg"
                     rating = {5}    
               
                />
                <Product 
                     id = "62126381"
                     title = "Apple Watch Series 7 [GPS 41mm] Smart Watch w/ Midnight Aluminum Case with Midnight Sport Band. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"
                     price = {329.00}
                     image = "https://m.media-amazon.com/images/I/71gg8mPlAuL._AC_SX679_.jpg"
                     rating = {5}    
                />
                <Product 
                     id = "46921581"
                     title = "Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
                     price = {39.99}
                     image = "https://images-na.ssl-images-amazon.com/images/I/51cGlUCK5WL._AC_UL320_SR320,320_.jpg"
                     rating = {5}    
                />

             

            </div>

            <div className='home__row'>
                <Product 
                     id = "92681391"
                     title = "Nintendo Switch Sports - Nintendo Switch"
                     price = {48.23}
                     image = "https://m.media-amazon.com/images/I/61WA1YOg4lL._SX522_.jpg"
                     rating = {4}    
                />

            </div>

        </div>
    </div>
  )
}

export default Home