import React from 'react';
import "./arrival.css"

const Arrival = ({ newArrivals }) => {
	return (
		<div className="arrivals">
			<div className="arrivals__header">
				<h2>New Arrivals</h2>
			</div>
			<div className="arrivals__body">
				{newArrivals.map((arrival) => (
					<div className="arrival" key={arrival.id}>
						<div className="arrival__top">
							<img src={arrival.image} alt="" />
						</div>
						<div className="arrival__bottom">
							<p>{arrival.name}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Arrival
