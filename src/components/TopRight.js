import React from 'react'
import girl1 from '../assets/left/girl1.svg'
import girl2 from '../assets/left/girl2.svg'
import icon from '../assets/left/icon.svg'
const TopRight = () => {
  return (
   <>
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
   </>
  )
}

export default TopRight