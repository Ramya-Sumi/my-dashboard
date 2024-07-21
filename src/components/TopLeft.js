// TopLeft.js
import React from 'react';
import vector from '../assets/vector.svg';

const TopLeft = () => {
  return (
    <>
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
    </>
  );
}

export default TopLeft;
