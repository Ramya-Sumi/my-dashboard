import React from 'react'
import {postedjobdata} from './hiring'
import arrowup from '../assets/arrowup.svg'
import search from '../assets/search.svg';
import filter from '../assets/filter.svg'

const Middlerow2 = () => {
  return (
    <>
    <div className='posted-menu'>
        <div className='post-info'>Posted Jobs</div>
        <div className='view-text'>view all</div>
        <div className="search-container1">
        <input className="input-search1" type="text" placeholder="Search" />
        <img className="search-icon1" src={search} alt="search an item" />
        </div>
        <div className="filter-container1">
        <img className="filter" src={filter} alt="search an item" />
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
        {
        postedjobdata.map((jobdata,index)=>{
        return   <div className='job-portal1'>
        <div className='menu1-job'>
        <div className='iconjob'><img src={jobdata.images} /></div>
        <div className='python-txt'>{jobdata.dest}</div>
        <div className='num-text'>{jobdata.id}</div>
        </div>
        <div className='line1-job'></div>
        <div className='top-menu'>
        <div className='role-text'>{jobdata.role}</div>
        <div></div>
        <div className='div-txt'>{jobdata.jobid}</div>
        <div className='total-app'>{jobdata.total}</div>
        </div>
        <div className='line3-bot'></div>
        <div className='month-text'>
        <div className='arrowup'><img src={arrowup}/></div>
        <div><span style={{color:'#0A66C2'}}>{jobdata.totcount}</span> vs Last month</div>
        <div>{jobdata.time}</div>
        </div>
        </div>
        })
        }
        </div>
    </>
  )
}

export default Middlerow2