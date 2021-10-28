import React from "react";
import "./App.css";
import MainFooter from "./components/footer/MainFooter";
import Footer from "./components/footer/Footer";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Hero from "./components/Hero/Hero";
import Benefits from './components/Benefit/Benefits.jsx'
import Arrivals from "./components/Arrival/Arrivals.jsx";
import Categories from "./components/Category/Categories.jsx";
import Testimonial from "./testimonial/Testimonial";
import Trending from "./Trending/Trending";
import Product from './components/Product/Product';
import Recipe from "./components/recipe/Recipe";
import Routes from "./components/routes/Routes";
import data from "./components/assets/database/data";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
	const { newArrivals, topCategories, trendingProducts } = data;
	return (
		<>
			<Header1 />
			<Header2 />
			<Hero />
			<Benefits />
			<Router>
				<Header1 />
				<Header2 />
				<Routes
					newArrivals={newArrivals}
					topCategories={topCategories}
					trendingProducts={trendingProducts}
				/>
			</Router>
			<Footer />
			<MainFooter />
		</>
	);
};

export default App;
