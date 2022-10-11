import React from 'react'
import {  NavLink } from "react-router-dom";
import './navBar.css'
import wavySvg from '../../assets/wavy-bg-svg.svg'

function NavigationBar() {
  return (
    <>
      <div className=''>
        <div>
          <img src={wavySvg} alt="wavy-background" className='wavy-bg'></img>
        </div>
        <div className="navbar-links desktop-navbar">
          <div className="nav-link">
            <NavLink to="/about-us">
              <li>About us</li>
            </NavLink>
            <NavLink to="/gallery">
              <li>Gallery</li>
            </NavLink>
            <NavLink to="/events">
              <li>Events</li>
            </NavLink>
            <NavLink to="/team">
              <li>Team</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationBar