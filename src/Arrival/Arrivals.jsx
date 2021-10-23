import React from 'react'
import arrivals from './arrivals'
import Arrival from './Arrival'
import "./arrival.css"

const Arrivals = () => {
    return (
        <div className="arrivals">
            <div className="arrivals__header"><h2>New Arrivals</h2></div>
            <div className="arrivals__body">
            {arrivals.map((arrival) => <Arrival
                key={arrival.id}
                image={arrival.icon}
                name={arrival.title}
            />)}
            </div>
        </div>
    )
}

export default Arrivals
