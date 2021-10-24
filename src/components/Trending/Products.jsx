import React from "react";
import "./Trending.css";

import data from "./../assets/database/data";
const Products = () => {
	const { trendingProducts } = data;

	return (
		<div className="products__container">
			{trendingProducts.map((post) => (
				<div className="products__single">
					<img src={post.image} alt="" className="products__image" />
					<p className="products__name">{post.name}</p>
					<div className="products__pricing">
						<p className="products__price">{post.price}</p>
						<p className="products__discount">
							{" "}
							<s>{post.price}</s>
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
