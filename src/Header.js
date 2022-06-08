import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"




const Header = () => {
    
    //for the basket number to increase, figure this out
    //const [{ basket, user }, dispatch] = useStateValue;
    
    /*
    const handleAuthentication = () => {

        if (user) {
            
            auth.signOut();
        }
    }
    */
  return (
    <div className='Header'>
        <Link to = "/">
            <img 
                className='header__logo'
                src="https://www.we-pack.co.uk/images/ww/Ecommerce/Amazon%20Logo.jpg"
            />
        </Link>
        
        
        <div className='header__search'>
            <input
            className='header__searchInput' 

            type="text" 
            />
            <SearchIcon className='header__searchIcon' />

        </div>

        <div className="header__search">
            
            {/*Change this to handle user Login status on the header */}
                        {/* <Link to = {!user && '/login'}> */}

            <Link to = {'/login'}>
                
                {/*Add this line to handle login status when you click*/}
                {/* <div onClick={ handleAuthentication } */}
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello Guest
                    </span>

                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>

                </div>
            
            </Link>

          

            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Returns
                </span>
                <span className='header__optionLineTwo'>
                    & Orders
                </span>

            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Your
                </span>
                <span className='header__optionLineTwo'>
                    Prime
                </span>

            </div>

            <Link to = "/checkout">
                <div className='header__optionBasket'>
                    <ShoppingCartIcon />
                    <span className='header__optionLineTwo header__basketCount'>
                        0{/*basket?.length*/}
                    </span>

                </div>
            </Link>

        

        </div>
       
    </div>
  )
}

export default Header;