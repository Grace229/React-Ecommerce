import React from 'react'
import P1 from './../assets/hand1.jpeg'
import P2 from './../assets/hand.jpeg'
import P3 from './../assets/p7.jpg'
import P4 from './../assets/p8.jpg'
import P5 from './../assets/two.jpg'
import P6 from './../assets/man.jpeg'
const Gallery = () => {
    return (
        <div className="gallery__container">
            <div className="gallery__card">
            <img src={P1} alt="" className="gallery__image" />
                <img src={P2} alt="" className="gallery__image" />
                <img src={P3} alt="" className="gallery__image" />
                <img src={P4} alt="" className="gallery__image" />
                <img src={P5} alt="" className="gallery__image" />
                <img src={P6} alt="" className="gallery__image" />
            
            </div>
            
                
        </div>
    )
}

export default Gallery
