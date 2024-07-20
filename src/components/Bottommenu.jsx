import React from 'react'
import filter from '../assets/filter.svg'
import {candidatedata} from './hiring'
import reject from '../assets/reject.svg';
import search from '../assets/search.svg';
const Bottommenu = () => {
  return (
    <>
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
        <table className='can-table' cellPadding={13}>
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
        {
        candidatedata.map((candidata,index)=>{
        const statusClass = `cls-${candidata.status.toLowerCase()}`;
        return <tr>
        <td>{candidata.id}</td>
        <td>{candidata.name}</td>
        <td>{candidata.pos}</td>
        <td>{candidata.level1}</td>
        <td>{candidata.level2}</td>
        <td>
        {candidata.level3 === 'reject' ? (
        <img src={reject} alt="Rejected" />
        ) : (
        candidata.level3
        )}
        </td>
        <td>
        {candidata.level4 === 'reject' ? (
        <img src={reject} alt="Rejected" />
        ) : (
        candidata.level4
        )}
        </td>
        <td>{candidata.total}</td>
        <td><input value={candidata.status} className={`${statusClass}`} readOnly/></td>
        <td><img src={candidata.action} alt={candidata.name} className='eye'/></td>
        </tr>
        })
        }
        </table>
    </>
  )
}

export default Bottommenu