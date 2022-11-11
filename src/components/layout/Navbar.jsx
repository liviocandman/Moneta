import * as MdIcons from 'react-icons/md'
import userImg from "../../assets/musk.png"
import { NavLink } from "react-router-dom";

import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
      <div className='navbar-container'>
        <div className="search-bar">
          <MdIcons.MdSearch />
          <input type="search" placeholder='Search' />
        </div>
        <div className="profile-area">
          <div className="theme-btn">
            <MdIcons.MdLightMode className='dlMode-icons active'/>
            <MdIcons.MdDarkMode className='dlMode-icons'/>
          </div>
          <div className="profile">
            <div className="profile-photo">
              <img src={"../../assets/musk.png"} />
            </div>
            <h5>Luke Doe</h5>
            <MdIcons.MdExpandMore />
          </div>
     
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar