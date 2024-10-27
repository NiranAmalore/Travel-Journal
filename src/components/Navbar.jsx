import React from "react"
import globeImg from '../images/Globe.png'

export default function Navbar(){
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={globeImg}/>
            <p className="navbar--title">my travel journal.</p>
        </nav>
    )
}
