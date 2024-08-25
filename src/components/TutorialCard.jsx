import React from 'react'

export default function TutorialCard(props) {
    const {children} = props

    return (
        <div className="tutorialCard">
            <img src="latest.jpg" alt="Missing Texture Photo"/>
            <div className="cardContainer">
                <h3>Tutorial Name</h3>
                <p>A very long tutorial description that is too long for its own good.</p>
            </div>
        </div>
    )
}
