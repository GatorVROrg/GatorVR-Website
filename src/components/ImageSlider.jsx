import React, { useState } from 'react'

export default function ImageSlider(props) {
    const { images } = props
    const [currentIndex, setCurrentIndex] = useState(0)

    function incrementIndex() {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    function decrementIndex() {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <div className="img-slide-background">
            <img className="img-slide-main" src={images[currentIndex].img} />
            <i onClick={decrementIndex} className="fa-solid fa-angle-left"></i>
            <i onClick={incrementIndex} className="fa-solid fa-angle-right"></i>
            Current index: {currentIndex}
        </div>
    )
}
