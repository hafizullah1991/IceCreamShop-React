import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-logo">
        <a href='#'>Bay Ice Cream </a>
      </div>
      <div className="navbar-right">

      <ul className='navbar-links'>
        <li> <a href='#home'>Home</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#flavors'>Flavors</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>
      <div class="navbar-extras">
        <div class="search-container">
            <input type="text" placeholder="Search..."/>
        </div>
        <div class="cart">
            <a href="#"><i class="fas fa-shopping-cart"></i></a>
        </div>
    </div>
    </div>
      <div className="hamburger">
        <spam className='bar'></spam>
        <spam className='bar'></spam>
        <spam className='bar'></spam>
      </div>
    </nav>
  )
}

export default Navbar
