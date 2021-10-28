import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import ShoppingCart from "../Shopping/ShoppingCart";
import SingleProduct from "../singleProduct/SingleProduct";

const Routes = ({ newArrivals, topCategories, trendingProducts }) => {
	return (
		<>
			<Switch>
				<Route path="/" exact>
					<Home
						newArrivals={newArrivals}
						topCategories={topCategories}
						trendingProducts={trendingProducts}
					/>
				</Route>
				<Route path="/cart" exact>
					<ShoppingCart />
				</Route>
				<Route path="/product" exact>
					<SingleProduct />
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
