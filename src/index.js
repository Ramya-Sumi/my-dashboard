import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Dashboard from './components/Dashboard';
import {meetinginfo} from './Data/HiringData';
import {postedjobdata} from './Data/HiringData';
import {candidatedata} from './Data/HiringData';
import {upcomingdata} from './Data/HiringData';
import {activitydata} from './Data/HiringData';
import {hiringdata} from './Data/HiringData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard
      meetinginfo={meetinginfo}
      postedjobdata={postedjobdata}
      candidatedata={candidatedata}
      upcomingdata={upcomingdata}
      activitydata={activitydata}
      hiringdata={hiringdata}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
