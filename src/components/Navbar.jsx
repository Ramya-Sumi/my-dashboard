import React from 'react'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import message from '../assets/message.svg'
import setting from '../assets/settings.svg'
import surface from '../assets/surface.svg'
import profile from '../assets/profile.svg'
import daymode from '../assets/daymode.svg'
import notification from '../assets/notification.svg'

import '../css/navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className='container'>
            <div className='logo'><img src={logo} alt="Logo"/></div>
            <div className="search-container">
                <input className="input-search" type="text" placeholder="Search" />
                <img className="search-icon" src={search} alt="search" />
            </div>
            {/* <div className='search'><input className='inputsearch' type="text" placeholder='search' /><img src={search} alt="search"/></div> */}
            <div className='icon'>
                <img src={daymode} alt="daymode"/>
                <img src={surface} alt="surface"/>
                <img src={message} alt="message"/>
                <img src={notification} alt="notification"/>
                <img src={setting} alt="setting"/>
                <img src={profile} alt="profile"/>
            </div>
        </div>

    </div>
  )
}

export default Navbar