import React from 'react';
import data from './../assets/database/data';
import Category from './Category'
import "./category.css"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const Categories = () => {
	const { topCategories } = data;

    return (
        <div className="categories">
            <div className="categories__header"><h2>Top Categories</h2></div>
            <div className="categories__body">
                <div className="categories__products">
                    {topCategories.map((category) => <Category
                        key={category.id} 
                        image={category.image}
                        name={category.name}
                        newPrice={category.price}
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
