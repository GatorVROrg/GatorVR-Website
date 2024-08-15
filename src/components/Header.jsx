import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="logoContainer">
                <img className="logo" src="GatorVR_Icon.png" alt="GatorVR Logo" />
                <span className="logoText">Gator VR</span>
            </div>
            <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/tutorials'>Tutorials</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </div>
        </>
    )
}
