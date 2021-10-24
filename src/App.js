import React from "react";
import "./App.css";
import MainFooter from "./components/footer/MainFooter";
import Footer from "./components/footer/Footer";
import PageSeven from "./components/pageSeven/PageSeven";
import Pagesix from "./components/pageSix/Pagesix";
import Header1 from "./components/Header/Header1";
import Header2 from "./components/Header/Header2";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefit/Benefits.jsx";
import Arrivals from "./components/Arrival/Arrivals.jsx";
import Categories from "./components/Category/Categories.jsx";
import Testimonial from "./components/testimonial/Testimonial";
import Trending from "./components/Trending/Trending";
import SingleProduct from './components/singleProduct/SingleProduct';
import ShoppingCart from './components/Shopping/ShoppingCart';

const App = () => {
	return (
		<>
			<Header1 />
			<Header2 />
			<Hero />
			<Benefits />
			<Arrivals />
			<Categories />
			<Trending />
			<Testimonial />
			<Pagesix />
			<PageSeven />
			<SingleProduct /> 
			 <ShoppingCart />
			<Footer />
			<MainFooter />
		</>
	);
};

export default App;
