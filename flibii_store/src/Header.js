import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"

function Header() {

   const [{basket,user},dispatch] = useStateValue();

   const handleAuthenticaton = ()=>{
      if(user){
 auth.signOut();
      }
   }

    return (

        <div className="header">
        <Link to="./">
        <img className="header_logo" src={"/flibii_logo.png"} 
        alt="Flibii Books Logo"/>

        </Link>
           

         <div className="header_search">
         <input className="header_searchInput" type="text"/>
         <SearchIcon className="header_searchIcon"/>
         </div>

         
         <div className="header_nav">
         <Link to={!user && '/login'}>
         <div onClick={handleAuthenticaton} className="header_option">
           <span className="header_optionLineOne">Hello , {!user ? 'Guest' : user.email}</span>
           <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
         </div>
       </Link>

       <Link to='/orders'>
         <div className="header_option">
         <span className="header_optionLineOne">returns</span>
         <span className="header_optionLineTwo">&Order</span>
         </div>
     </Link>

         <div className="header_option">
         <span className="header_optionLineOne">Your</span>
         <span className="header_optionLineTwo">prime</span>
         </div>

         <Link to="./checkout">
               <div className="header_optionBasket">
               <ShoppingBasketIcon/>
               <span className="header_optionLineTwo header_basketCount">
               {basket?.length}
               </span>
               </div>
         </Link>

        
            </div>
         </div>
    );
}

export default Header;
