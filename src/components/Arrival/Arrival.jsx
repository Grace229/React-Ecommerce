import React from 'react'
import "./arrival.css"

const Arrival = ({ image, name }) => {
    return (
        <div className="arrival">
            <div className="arrival__top"><img src={image} alt="" /></div>
            <div className="arrival__bottom"><p>{name}</p></div>
        </div>
    )
}

export default Arrival
