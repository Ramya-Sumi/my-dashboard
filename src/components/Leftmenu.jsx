import React from 'react'
import menu from '../assets/left/menu.svg'
import pen from '../assets/left/pen.svg'
import write from '../assets/left/write.svg'
import menus from '../assets/left/menus.svg'
import group1 from '../assets/left/group1.svg'
import group2 from '../assets/left/group2.svg'
import group3 from '../assets/left/group3.svg'
import group4 from '../assets/left/group4.svg'
import group5 from '../assets/left/group5.svg'


import '../css/leftmenu.css'

const Leftmenu = () => {
  return (
    <div>
        <div className='container-left'>
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
    </div>
  )
}

export default Leftmenu