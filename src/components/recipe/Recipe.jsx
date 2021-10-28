import React from "react";
import "./Recipe.css";
import P1 from "../assets/pineapple.jpg";
import P2 from "../assets/strawberry.jpg";
import P3 from "../assets/green.jpg";

const Recipe = () => {
    
    return (
        <div>
            <div className="recipe__container">
        <div className="recipe__content">
            <div className="recipe__card">
                <div> 
                    <div className="recipe__description1">
                        <h5 className="recipe__title" >Pineapple Juice</h5>
                        <p className="recipe__note">100% Locally grown GMO-Free organic juice</p>
                    </div>
      <img src={P1} alt="" className="recipe__image1" />          
                </div>
                <div>
                <div className="recipe__description">
                    <h5 className="recipe__title" >Strawberries Juice</h5>
                <p className="recipe__note">100% Locally grown GMO-Free organic juice</p>       
                </div>
                <img src={P2} alt="" className="recipe__image2" />
                </div>
                <div>
                <div className="recipe__description3">
                    <h5 className="recipe__title">Mint Juice</h5>
                <p className="recipe__note">100% Locally grown GMO-Free organic juice</p>
                </div>
                <img src={P3} alt="" className="recipe__image3" />
                </div>
            </div>
            
        </div>
            </div>
        </div>
    )
}
	const data = [
		{
			name: " Guava Juice",
			image: P1,
			price: "$10.00",
			discount: "$10.00",
		},
		{
			name: " Kiwi Juice",
			image: P2,
			price: "$10.00",
			discount: "$10.00",
		},
		{
			name: "Healthy Drink Juice",
			image: P3,
			price: "$10.00",
			discount: "$10.00",
		},
	];

	return (
		<div>
			<div className="recipe__container">
				<div className="recipe__content">
					{data.map((post) => (
						<div className="recipe__card">
							<img src={post.image} alt="" className="recipe__image" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Recipe;
