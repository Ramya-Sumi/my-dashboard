import React from 'react';
import leftarrow from '../assets/arrow-left.svg';
import rightarrow from '../assets/arrow-side.svg';
import { hiringdata } from './hiring';
import { activitydata } from './hiring';
import { upcomingdata } from './hiring';

const Rightmenu = () => {
  return (
    <>
      <div className="calendar-container">
        <div className="calendar-header">
          <div className='cal-main-div'>
            <div className='leftarrow-div'>
              <img src={leftarrow} alt="Left arrow for navigating calendar" className='leftarrow' />
            </div>
            <h1 className='month-style'>March</h1>
            <div className='rightarrow-div'>
              <img src={rightarrow} alt="Right arrow for navigating calendar" className='rightarrow' />
            </div>
          </div>
        </div>
        <div className='cal-line'></div>
        <table className="calendar">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr className="days">
              <td><div className="date">1</div></td>
              <td><div className="date">2</div></td>
              <td><div className="date">3</div></td>
              <td><div className="date">4</div></td>
              <td><div className="date">5</div></td>
              <td><div className="date">6</div></td>
              <td><div className="date">7</div></td>
            </tr>
            <tr className="days">
              <td><div className="date">8</div></td>
              <td><div className="date add-sty">9</div></td>
              <td><div className="date">10</div></td>
              <td><div className="date">11</div></td>
              <td><div className="date">12</div></td>
              <td><div className="date">13</div></td>
              <td><div className="date">14</div></td>
            </tr>
            <tr className="days">
              <td><div className="date">15</div></td>
              <td><div className="date">16</div></td>
              <td><div className="date">17</div></td>
              <td><div className="date">18</div></td>
              <td><div className="date add-sty">19</div></td>
              <td><div className="date">20</div></td>
              <td><div className="date">21</div></td>
            </tr>
            <tr className="days">
              <td><div className="date">22</div></td>
              <td><div className="date">23</div></td>
              <td><div className="date">24</div></td>
              <td><div className="date">25</div></td>
              <td><div className="date">26</div></td>
              <td><div className="date">27</div></td>
              <td><div className="date">28</div></td>
            </tr>
            <tr className="days">
              <td><div className="date">29</div></td>
              <td><div className="date">30</div></td>
              <td><div className="date">31</div></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: '50px', marginLeft: '10px' }}>
        <div className='up-main-menu'>
          <div>Upcomings</div>
          <div className='view-all-txt'>View All</div>
        </div>
        {
          upcomingdata.map((updata, index) => {
            let backgroundColor, textColor;
            switch (index) {
              case 0:
                backgroundColor = '#0B74AD26';
                textColor = '#0B74AD'; 
                break;
              case 1:
                backgroundColor = '#C0C1C1'; 
                textColor = '#091316'; 
                break;
              case 2:
                backgroundColor = '#E1E1E1'; 
                textColor = '#091316'; 
                break;
              default:
                backgroundColor = '#FFFFFF'; 
                textColor = '#000000'; 
                break;
            }
            return (
              <div className='up-menu' key={index}>
                <div className='date-sty' style={{ backgroundColor, color: textColor }}>
                  <div className='dates-add' style={{ color: textColor }}>{updata.date}</div>
                  <div className='mon-sty' style={{ color: textColor }}>{updata.month}</div>
                </div>
                <div>
                  <div>{updata.person}</div>
                  <div>Created by <span style={{ color: '#0A66C2', fontWeight: '500' }}>{updata.name}</span></div>
                  <div>{updata.time}</div>
                </div>
                <div style={{ marginTop: '-28px' }}>
                  <button className='details'>Details</button>
                </div>
              </div>
            );
          })
        }
      </div>
      <div style={{ marginTop: '50px', marginLeft: '10px' }}>
        <div className='up-main-menu' style={{ gap: '180px' }}>
          <div>Activity</div>
          <div className='view-all-txt'>View All</div>
        </div>
        {
          activitydata.map((actdata, index) => {
            return (
              <div className='up-menu-act' key={index}>
                <div><img src={actdata.images} alt="Activity related visual" /></div>
                <div>
                  <div>{actdata.name} <span style={{ color: '#0A66C2' }}>[{actdata.role}]</span></div>
                  <div>{actdata.text}</div>
                  <div>{actdata.time}</div>
                </div>
              </div>
            );
          })
        }
      </div>
      <div style={{ marginTop: '50px', marginLeft: '10px' }}>
        <div className='up-main-menu1'>
          <div>Hiring Candidates</div>
          <div className='view-all-txt'>View All</div>
        </div>
        {
          hiringdata.map((data, index) => {
            return (
              <div className='up-menu1' key={index}>
                <div><img src={data.images} alt="Candidate related visual" /></div>
                <div>
                  <div>{data.name}</div>
                  <div>{data.role}</div>
                  <div>{data.person}</div>
                </div>
                <div>
                  <button className='details1'>Details</button>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Rightmenu;
