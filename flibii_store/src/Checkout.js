import React from 'react';
import "./checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal"
import{useStateValue} from "./StateProvider";


function Checkout() {

    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="https://m.media-amazon.com/images/S/abs-image-upload-na/c/AmazonStores/ATVPDKIKX0DER/46ce39b478a48bc311d9ebcceaab26f2.w1500.h400._CR0%2C0%2C1500%2C400_SX1280_.jpg"
             alt="Ads"/>
             
             <div >
             <h3>Hello, {user?.email}</h3>
             <h2 className="checkout_title">Your shopping Basket</h2>

             {basket.map(item =>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
        
              />
             ))}
             </div>
            </div>

            <div className="checkout_right">

          <Subtotal></Subtotal>

            </div>
        </div>
    )
}

export default Checkout
