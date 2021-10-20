import React from 'react'
import './Trending.css'
import P1 from './../assets/guava.png'
import P2 from './../assets/kiwi.png'
import P3 from './../assets/orange.png'
import P4 from './../assets/watermelon.png'
import P5 from './../assets/new.png'
import P6 from './../assets/carrot.png'
import P7 from './../assets/banana.png'
import P8 from './../assets/lentils.png'

const Products = () => {
    const data =  [
        {
            "name": " Guava Juice",
            "image":P1,  
            "price": '$10.00', 
            "discount": '$10.00',
        },
        {
            "name": " Kiwi Juice",
            "image":P2,  
            "price": '$10.00', 
            "discount": '$10.00',
        },
        {
            "name": "Healthy Drink Juice",
            "image":P3,  
            "price": '$10.00', 
            "discount": '$10.00',
        },
        {
            "name": "Watermelon Juice",
            "image":P4,  
            "price": '$10.00', 
            "discount": '$10.00',
        },
        {
            "name": "Orange Juice",
            "image":P5,  
            "price": '$10.00', 
            "discount": '$10.00',
        },
        {
            "name": "Carrots Juice",
            "image":P6,  
            "price": '$10.00', 
            "discount": '$10.00',
        },
        {
            "name": "Strawberries Juice",
            "image":P7,  
            "price": '$10.00', 
            "discount": '$10.00',
        },
      
        {
            "name": "Turnip Juice",
            "image":P8,  
            "price": '$10.00', 
            "discount": '$10.00',
        },
        ]
    
    return (
        <div className="products__container">
              {data.map((post) =>
       <div className="products__single">
       <img src={post.image} alt="" className="products__image" />
       <p className="products__name">{ post.name }</p>
       <div className='products__pricing'>
       <p className="products__price">{ post.price }</p>
       <p className="products__discount"> <s>{ post.price }</s></p>
       </div>
   </div>
      )}
            


            
        </div>
    )
}

export default Products
