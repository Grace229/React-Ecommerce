import React from 'react'
import './Recipe.css'
import P1 from './../../assets/pineapple.jpg'
import P2 from './../../assets/strawberry.jpg'
import P3 from './../../assets/green.jpg'

const Recipe = () => {
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
        }
        ]
    
    return (
        <div>
            <div className="recipe__container">
        <div className="recipe__content">
        {data.map((post) =>
            <div className="recipe__card">
                {/* <div className="recipe__description">
                    <h5>{post.name}</h5>
                </div> */}
<img src={post.image} alt="" className="recipe__image" />
            </div>
             )}
        </div>
            </div>
        </div>
    )
}

export default Recipe
