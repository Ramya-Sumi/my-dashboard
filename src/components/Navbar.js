// Navbar.js
import React from 'react';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import daymode from '../assets/daymode.svg';
import surface from '../assets/surface.svg';
import message from '../assets/message.svg';
import notification from '../assets/notification.svg';
import setting from '../assets/settings.svg';
import profile from '../assets/profile.svg';

const Navbar = () => {
  return (
    <div className="navbar">
          <div className='container-nav'>
            <div className='logo'>
              <img src={logo} alt="Your Logo" />
            </div>
            <div className="search-container">
              <input className="input-search" type="text" placeholder="Search" />
              <img className="search-icon" src={search} alt="search the item" />
            </div>
            <div className='icon'>
              <img src={daymode} alt="daymode settings" />
              <img src={surface} alt="surface of earth" />
              <img src={message} alt="message the item" />
              <img src={notification} alt="notification of item" />
              <img src={setting} alt="setting of menu" />
              <img src={profile} alt="profile settings" />
            </div>
          </div>
        </div>
  );
}

export default Navbar;
