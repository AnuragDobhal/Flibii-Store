import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
       
       <div className="home_container">
       <img className="home_image"src="https://images-na.ssl-images-amazon.com/images/G/01/digital/adrive/images/personalized-devices/make_it_personal_hero_5._TTH_.jpg" 
            alt="bannerImage "/>
       

    <div className="home_row">  {/* TWO PRODUCTS */}
                    <Product
                    id="11FL2629"
                    title='MAC osX Hacks ,MAC Hacks this is the amazing book by google , 
                    you can have so many tricks to make your searching better and fast by this book'
                    price={476} image='http://images.amazon.com/images/P/0596004605.01._PE50_PI_SCMZZZZZZZ_.jpg'
                    rating={4}/>
                   
                    <Product
                    id="11FL2689"
                    title='Google Hacks this is the amazing book by google , 
                    you can have so many tricks to make your searching better and fast by this book'
                    price={553} image='http://images.amazon.com/images/P/0596004478.01.20TTZZZZ.jpg'
                    rating={5}/>
                
     </div>

     <div className="home_row"> {/* THREE PRODUCTS */}
                 <Product
                 id="11FL2223"
                 title='Google Hacks this is the amazing book by google , 
                 you can have so many tricks to make your searching better and fast by this book'
                 price={476} image='http://images.amazon.com/images/P/0596004605.01._PE50_PI_SCMZZZZZZZ_.jpg'
                 rating={3}/>
                
                 <Product
                 id="11FL245"
                 title='Linux Server Hacks, Linux Hacks this is the amazing book by google , 
                 you can have so many tricks to make your searching better and fast by this Linux book '
                 price={623} image='http://images.amazon.com/images/P/0596004605.01._PE50_PI_SCMZZZZZZZ_.jpg'
                 rating={5}/>

                 <Product
                 id="11FL2666"
                 title='Google Hacks this is the amazing book by google , 
                 you can have so many tricks to make your searching better and fast by this book'
                 price={653} image='http://images.amazon.com/images/P/0596004478.01.20TTZZZZ.jpg'
                 rating={5}/>

     </div>

     <div className="home_row"> {/* THREE PRODUCTS */}
     <Product
     id="11FL2223"
     title='Google Hacks this is the amazing book by google , 
     you can have so many tricks to make your searching better and fast by this book'
     price={476} image='http://images.amazon.com/images/P/0596004605.01._PE50_PI_SCMZZZZZZZ_.jpg'
     rating={3}/>
    
     <Product
     id="11FL245"
     title='Linux Server Hacks, Linux Hacks this is the amazing book by google , 
     you can have so many tricks to make your searching better and fast by this Linux book '
     price={623} image='http://images.amazon.com/images/P/0596004605.01._PE50_PI_SCMZZZZZZZ_.jpg'
     rating={5}/>

     <Product
     id="11FL2666"
     title='Google Hacks this is the amazing book by google , 
     you can have so many tricks to make your searching better and fast by this book'
     price={653} image='http://images.amazon.com/images/P/0596004478.01.20TTZZZZ.jpg'
     rating={5}/>

</div>

<div className="home_row">  {/* TWO PRODUCTS */}
<Product
id="11FL2629"
title='MAC osX Hacks ,MAC Hacks this is the amazing book by google , 
you can have so many tricks to make your searching better and fast by this book'
price={476} image='http://images.amazon.com/images/P/0596004605.01._PE50_PI_SCMZZZZZZZ_.jpg'
rating={4}/>

<Product
id="11FL2689"
title='Google Hacks this is the amazing book by google , 
you can have so many tricks to make your searching better and fast by this book'
price={553} image='http://images.amazon.com/images/P/0596004478.01.20TTZZZZ.jpg'
rating={5}/>

</div>



     <div className="home_row"> {/* ONE PRODUCTS */}
                 <Product
                 id="11FL2686"
                 title='Google Hacks this is the amazing book by google , 
                 you can have so many tricks to make your searching better and fast by this book'
                 price={653} image='http://images.amazon.com/images/P/0596004478.01.20TTZZZZ.jpg'
                 rating={5}/>
     </div>
       </div>

        </div>
    );
}

export default Home;
