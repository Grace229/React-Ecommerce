import React from 'react'
import categories from './categories'
import Category from './Category'
import "./category.css"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const Categories = () => {
    return (
        <div className="categories">
            <div className="categories__header"><h2>Top Categories</h2></div>
            <div className="categories__body">
                <div className="categories__products">
                    {categories.map((category) => <Category
                        key={category.id} 
                        image={category.icon}
                        name={category.title}
                        newPrice={category.newPrice}
                        oldPrice={category.oldPrice}
                    />)}
                </div>
                <div className="category__pagination">
                    <IconButton className="button">
                        <ArrowBackIosOutlined className="arrow"/>
                    </IconButton>
                    <div className="arrow-separate"></div>
                    <IconButton className="button">
                        <ArrowForwardIosOutlined className="arrow"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Categories
