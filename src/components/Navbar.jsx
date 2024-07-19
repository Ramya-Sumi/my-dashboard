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
import arrowup from '../assets/arrowup.svg'
import ui from '../assets/ui.svg'
import python from '../assets/python.svg'
import java from '../assets/java.svg'
import angular from '../assets/angular.svg'
import filter from '../assets/filter.svg'
import vector from '../assets/vector.svg'
import eye from '../assets/eye.svg'
import girl1 from '../assets/left/girl1.svg'
import girl2 from '../assets/left/girl2.svg'
import icon from '../assets/left/icon.svg'

import '../css/navbar.css';

const Navbar = () => {
  return (
    <div class="container">
        <div class="navbar">
        <div className='container-nav'>
         <div className='logo'>
          <img src={logo} alt="Logo" />
       </div>
         <div className="search-container">
           <input className="input-search" type="text" placeholder="Search" />
           <img className="search-icon" src={search} alt="search" />
         </div>
         <div className='icon'>
           <img src={daymode} alt="daymode" />
           <img src={surface} alt="surface" />
           <img src={message} alt="message" />
           <img src={notification} alt="notification" />
           <img src={setting} alt="setting" />
           <img src={profile} alt="profile" />
         </div>
       </div>
        </div>
        <div class="left-column">
        <div className='icon-left'>
                <img src={menu} alt="menu" style={{marginTop:'35px'}}/>
                <img src={pen} alt="pen"/>
                <img src={write} alt="write"/>
                <img src={menus} alt="menus"/>
                <img src={group1} alt="group1"/>
                <img src={group2} alt="group2"/>
                <img src={group3} alt="group3"/>
                <img src={group4} alt="group4"/>
                <img src={group5} alt="group5"/>
            </div>
        </div>
        <div class="top-left">
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
        <div class="top-right">
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
        <div className='view-menu'><input className='view-txt' placeholder='view details'/></div>
        </div>
        <div class="middle-row-1">
          <div>
            <div className='meet-info'>Today Interviews Meetings Info</div>
            <div></div>

          </div>
        </div>
        <div class="middle-row-2">
          <div className='posted-menu'>
            <div className='post-info'>Posted Jobs</div>
            <div className='view-text'>view all</div>
            <div className="search-container1">
              <input className="input-search1" type="text" placeholder="Search" />
              <img className="search-icon1" src={search} alt="search" />
             </div>
             <div className="filter-container1">
              <img className="filter" src={filter} alt="search" />
              <div className='filter-txt'>Filters</div>
             </div>
          </div>
          <div className='jobs-menu'>
            <div>Active Jobs</div>
            <div>Inactive Jobs</div>
            <div>Completed Jobs</div>
          </div>
          <div className='line3'></div>
          <div style={{display:'flex'}}>
            <div className='job-portal1'>
              <div className='menu1-job'>
                <div className='iconjob'><img src={python} /></div>
                <div className='python-txt'>Python Developers</div>
                <div className='num-text'>#001</div>

              </div>
              <div className='line1-job'></div>
              <div className='top-menu'>
                <div className='role-text'>Senior Developers</div>
                <div></div>
                <div className='div-txt'>258</div>
                <div className='total-app'>Total Applicants</div>
              </div>
              <div className='line3-bot'></div>
              <div className='month-text'>
                <div className='arrowup'><img src={arrowup}/></div>
                <div><span style={{color:'#0A66C2'}}>28%</span> vs Last month</div>
                <div>6 mins ago</div>
              </div>
            </div>
            <div className='job-portal1'>
              <div className='menu1-job'>
                <div className='iconjob'><img src={angular} /></div>
                <div className='python-txt'>Android Developers</div>
                <div className='num-text'>#002</div>

              </div>
              <div className='line1-job'></div>
              <div className='top-menu'>
                <div className='role-text'>Senior Developers</div>
                <div></div>
                <div className='div-txt'>258</div>
                <div className='total-app'>Total Applicants</div>
              </div>
              <div className='line3-bot'></div>
              <div className='month-text'>
                <div  className='arrowup'><img src={arrowup}/></div>
                <div><span style={{color:'#0A66C2'}}>28%</span> vs Last month</div>
                <div>6 mins ago</div>
              </div>
            </div>
            <div className='job-portal1'>
              <div className='menu1-job'>
                <div className='iconjob'><img src={java} /></div>
                <div className='python-txt'>Java Developers</div>
                <div className='num-text'>#003</div>

              </div>
              <div className='line1-job'></div>
              <div className='top-menu'>
                <div className='role-text'>Senior Developers</div>
                <div></div>
                <div className='div-txt'>258</div>
                <div className='total-app'>Total Applicants</div>
              </div>
              <div className='line3-bot'></div>
              <div className='month-text'>
                <div  className='arrowup'><img src={arrowup}/></div>
                <div><span style={{color:'#0A66C2'}}>28%</span> vs Last month</div>
                <div>6 mins ago</div>
              </div>
            </div>
            <div className='job-portal1'>
              <div className='menu1-job'>
                <div className='iconjob'><img src={ui} /></div>
                <div className='python-txt'>UX|UI Designers</div>
                <div className='num-text'>#003</div>

              </div>
              <div className='line1-job'></div>
              <div className='top-menu'>
                <div className='role-text'>Senior Developers</div>
                <div></div>
                <div className='div-txt'>258</div>
                <div className='total-app'>Total Applicants</div>
              </div>
              <div className='line3-bot'></div>
              <div className='month-text'>
              <div  className='arrowup'><img src={arrowup}/></div>
                <div><span style={{color:'#0A66C2'}}>28%</span> vs Last month</div>
                <div>6 mins ago</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-row">
        <div className='can-menu'>
            <div className='can-info'>Candidate Status</div>
            <div className='view-text'>view all</div>
            <div className="search-container1">
              <input className="input-search1" type="text" placeholder="Search" />
              <img className="search-icon1" src={search} alt="search" />
             </div>
             <div className="filter-container1">
              <img className="filter" src={filter} alt="search" />
              <div className='filter-txt'>Filters</div>
             </div>
          </div>
          <table className='can-table' cellPadding={20}>
            <tr>
              <th>Job ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>1st Level</th>
              <th>2nd Level</th>
              <th>3rd Level</th>
              <th>4th Level</th>
              <th>Total Marks</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>#001</td>
              <td>John Doe</td>
              <td>Designer</td>
              <td>6/10</td>
              <td>7/10</td>
              <td>3/10</td>
              <td>...</td>
              <td>...</td>
              <td><input value='Active' className='active-cls'/></td>
              <td><img src={eye} alt='eye'/></td>

            </tr>
          </table>
          
        </div>
        <div class="right-column">Right Column</div>
    </div>
    );
}

export default Navbar;
