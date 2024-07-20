import React from 'react'
import clock from '../assets/clock.svg'
import dot from '../assets/dot.svg'
import calender from '../assets/calender.svg'
import {meetinginfo} from './hiring'
const Middlerow = () => {
  return (
    <>
    <div className="top-section">
        <div className='meet-main-menu'>
            <div className='meet-info'>Today Interviews Meetings Info</div>
            <div className='dot-icon'><img src={dot} alt=""/></div>
        </div>
        <div className='line2-1'></div>
    </div>
  <div className="bottom-section">
    <div className="left-side">
      {
        meetinginfo.map((meetingdata, index) => {
          return (
            <div className="prof-menu" key={index}>
              <div className='menu1-prof'>
                <div className='profile-boy'>
                  <img src={meetingdata.image} alt="" />
                </div>
                <div>{meetingdata.name}</div>
                <div>{meetingdata.role}</div>
                <div className='icons-menu-bar'>
                  <div className='calen-menu'>
                    <div><img src={calender} alt="" /></div>
                    <div>19th Feb 2024</div>
                  </div>
                  <div className='line-cal'></div>
                  <div className='clock-menu'>
                    <div><img src={clock} alt="" /></div>
                    <div>10.30 A.M</div>
                  </div>
                </div>
              </div>
              <div className="right-side-data">
                <table className="info-table">
                  <tbody>
                    <tr className="border-grey">
                      <td>1st Level: {meetingdata.level1}</td>
                      <td>Interviewer: {meetingdata.interviewer1}</td>
                    </tr>
                    <tr className="border-grey">
                      <td>2nd Level:  {meetingdata.level2}</td>
                      <td>Interviewer: {meetingdata.interviewer2}</td>
                    </tr>
                    <tr className="border-grey">
                      <td>3rd Level: {meetingdata.level3}</td>
                      <td>Interviewer: <span style={{ color: '#0A66C2' }}>{meetingdata.interviewer3}</span></td>
                    </tr>
                    <tr className="border-grey">
                      <td>Meet Via: {meetingdata.meet}</td>
                      <td>Attendees: {meetingdata.interviewer4}</td>
                    </tr>
                  </tbody>
                </table>
                <div className='btn-menu'>
                  <button className='resh-txt'>Reschedule Meeting</button>
                  <button className='join-txt'>Join Meeting</button>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  </div>
  {/* <div className='scroll-bar'></div> */}
    </>
  )
}

export default Middlerow