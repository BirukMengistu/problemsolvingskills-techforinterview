import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav-syles.css'
const SideNav = () => {
  return (
    <div className='nav-area'>
      <div className='side-nav'>
        <ul>
            <li> <a href='/'>Home </a></li>
            <li> <a href='/blog'>blog</a></li>
            <li> <a href='/FAQ'>FAQ</a></li>

        </ul>
      </div>
    </div>
  )
}

export default SideNav
