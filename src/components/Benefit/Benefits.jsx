import React from 'react'
import './benefit.css'
import Benefit from '../Benefit/Benefit'
import benefits from '../../benefits'

const Benefits = () => {
    return (
        <div className='benefits'>
            {benefits.map((benefit) => <Benefit 
                image={benefit.icon}
                title={benefit.title}
                description={benefit.details}
            />)}
        </div>
    )
}

export default Benefits
