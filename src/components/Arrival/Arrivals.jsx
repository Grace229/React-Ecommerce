import React from 'react'
import data from "./../assets/database/data";
import Arrival from './Arrival'
import "./arrival.css"

const Arrivals = () => {
	const { newArrivals } = data;

    return (
        <div className="arrivals">
            <div className="arrivals__header"><h2>New Arrivals</h2></div>
            <div className="arrivals__body">
            {newArrivals.map((arrival) => <Arrival
                key={arrival.id}
                image={arrival.image}
                name={arrival.name}
            />)}
            </div>
        </div>
    )
}

export default Arrivals
