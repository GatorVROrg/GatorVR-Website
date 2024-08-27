import React from 'react'
import ImageSlider from './ImageSlider'

export default function ImageGallery() {
    const images = [
        {
            img: "/photo-gallery/img1.jpg",
            capt: "Image 1."
        },
        {
            img: "/photo-gallery/img2.jpg",
            capt: "Image 2."
        },
        {
            img: "/photo-gallery/img3.jpg",
            capt: "Image 3."
        },
        {
            img: "/photo-gallery/img4.png",
            capt: "Image 4."
        }
    ]

    return (
        <div className="img-gallery-container">
            <ImageSlider images={images} />
        </div>
    )
}
