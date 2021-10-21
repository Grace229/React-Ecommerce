import React from 'react'
import categories from './categories'
import Category from './Category'
import "./category.css"

const Categories = () => {
    return (
        <div className="categories">
            <div className="categories__header"><h2>Top Categories</h2></div>
            <div className="categories__body">
            {categories.map((category) => <Category 
                image={category.icon}
                name={category.title}
                newPrice={category.newPrice}
                oldPrice={category.oldPrice}
            />)}
            </div>
        </div>
    )
}

export default Categories
