import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
import Logo from "../../assets/logo.svg"

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_logo">
        <Link to="/"><img src={Logo} className="logo"/></Link>
      </div>
      <div className="Navbar_links">
        <Link to="/aboutUs" className="Navbar_link">About Us</Link>
        <Link to="/gallery"className="Navbar_link">Gallery</Link>
        <Link to="/events"className="Navbar_link">Events</Link>
        <Link to="/team"className="Navbar_link">Team</Link>
        <Link to="/contact"className="Navbar_link">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar