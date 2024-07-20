import React from 'react';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import message from '../assets/message.svg';
import setting from '../assets/settings.svg';
import surface from '../assets/surface.svg';
import profile from '../assets/profile.svg';
import daymode from '../assets/daymode.svg';
import notification from '../assets/notification.svg';
import menu from '../assets/left/menu.svg'
import pen from '../assets/left/pen.svg'
import write from '../assets/left/write.svg'
import menus from '../assets/left/menus.svg'
import group1 from '../assets/left/group1.svg'
import group2 from '../assets/left/group2.svg'
import group3 from '../assets/left/group3.svg'
import group4 from '../assets/left/group4.svg'
import group5 from '../assets/left/group5.svg'
import vector from '../assets/vector.svg'
import girl1 from '../assets/left/girl1.svg'
import girl2 from '../assets/left/girl2.svg'
import icon from '../assets/left/icon.svg'
import '../css/main.css';
import Rightmenu from '../components/Rightmenu';
import Middlerow from '../components/Middlerow';
import Middlerow2 from '../components/Middlerow2';
import Bottommenu from '../components/Bottommenu';

const Navbar = () => {
  return (

      // main container starts
      <div className="container">

        {/* navbar start */}
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

        {/* left bar navigation starts */}
        <div className="left-column">
          <div className='icon-left'>
            <img src={menu} alt="menu" style={{marginTop:'35px'}}/>
            <img src={pen} alt="pen icon"/>
            <img src={write} alt="write icon"/>
            <img src={menus} alt="menus icon"/>
            <img src={group1} alt="group1 icon"/>
            <img src={group2} alt="group2 icon"/>
            <img src={group3} alt="group3 icon"/>
            <img src={group4} alt="group4 icon"/>
            <img src={group5} alt="group5 icon"/>
          </div>
        </div>

        {/* bar chart starts */}
        <div className="top-left">
          <div>
              <div>
                  <div className='hr-employee-css'>HR Employee</div>
                  <div className='manage-sys'>Enjoy your selecting potential candidates Tracking and Management System.</div>
              </div>
              <div className='app-menu'>
                  <div className='info-menu'>
                      <div className='app-info'>Application’s  Info</div>
                      <div className='bar-text'>
                          <div className='square1'></div>
                          <div className='received-txt'>Received</div>
                          <div className='square2'></div>
                          <div className='processed-txt'>Processed</div>
                      </div>
                      <div className='month-div'>
                          <select className='month'><option>Month</option></select>
                      </div>
                  </div>
                  <div className='line'></div>
                  <div class="chart-container">
                      <div class="y-axis">
                          <div class="y-label">4000</div>
                          <div class="y-label">3000</div>
                          <div class="y-label">2000</div>
                          <div class="y-label">1000</div>
                          <div class="y-label">0</div>
                      </div>
                      <div className="bar-chart">
                          <div className="bar" style={{height: '50%'}} data-label="Jan"></div>
                          <div className="bar" style={{height: '64%'}} data-label="Feb"></div>
                          <div className="bar" style={{height: '72%'}} data-label="Mar"></div>
                          <div className="bar" style={{height: '55%'}}  data-label="Apr"></div>
                          <div className="bar" style={{height: '90%'}}  data-label="May"></div>
                          <div className="bar" style={{height: '39%'}}  data-label="Jun"></div>
                          <div className="bar" style={{height: '72%'}}  data-label="Jul"></div>
                          <div className="bar" style={{height: '56%'}}  data-label="Aug"></div>
                          <div className="bar" style={{height: '95%'}}  data-label="Sep"></div>
                          <div className="bar" style={{height: '15%'}}  data-label="Oct"></div>
                          <div className="bar" style={{height: '65%'}}  data-label="Nov"></div>
                          <div className="bar" style={{height: '80%'}}  data-label="Dec"></div>
                      </div>
                      <div className='vector'><img src={vector} alt="vector" style={{width:"97%"}}/></div>
                  </div>
              </div>
          </div>
        </div>

        {/* right section */}
        <div className="top-right">
          <div className='blue-box'>
            <div>
              <div className='icon-2'><img src={icon} alt='icon'/></div>
              <div className='num1-text'>0033</div>
              <div className='new-text'>New Assessment's</div>
            </div>
            <div  style={{ marginTop: "25px"}}><img src={girl2} alt='girl2' /></div>
            <div style={{ marginTop: "-50px",marginLeft: "-50px"}}>
              <div><img src={girl1} alt='girl1' style={{width:"225px"}}/></div>
            </div>
          </div>
          <div className='view-menu'><button className='view-txt'>view details</button></div>
        </div>

        {/* middle row 1 starts from here */}
        <div className="middle-row-1">
          <Middlerow />
        </div>

        {/* middle row 2 starts from here */}
        <div className="middle-row-2">
          <Middlerow2 />
        </div>

        {/* bottom rows starts from here */}
        <div className="bottom-row">
          <Bottommenu />
        </div>
        
        {/* right column starts from here */}
        <div className="right-column">
          <Rightmenu />
        </div>
      </div>
    );
}

export default Navbar;
