import React from "react";
import "./pageSix.css";
import Asset1 from "../../images/asset1.png";
import AppleStore from "../../images/apple-store.png";
import GoogleStore from "../../images/google-store.png";


const Pagesix = () => {
	return (
		<div className="pageSix">
			<div className="pageSix-content">
				<div className="pageSix-content__left">
					<img src={Asset1} alt="" />
				</div>
				<div className="pageSix-content__right">
					<div className="pageSix-content__right-header">Get Our Recipes Now!</div>
					<p>Fruits are an excellent source of vitamins and minerals</p>
					<form action="">
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="pageSix__form-group"
						/>
						<button type="submit" className="pageSix__form-group">
							Subscribe
						</button>
					</form>

					<div className="pageSix-content__app-market">
						<a href="@#">
							<img src={AppleStore} alt="" />
						</a>
						<a href="@#">
							<img src={GoogleStore} alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pagesix;
