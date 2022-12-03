import React from "react"
import logo from "../assets/globe.png"


export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="logo" />
            <p>my travel journal.</p>
        </nav>
    )
}