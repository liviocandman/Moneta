import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className="search-bar">
          <MdIcons.MdSearch />
          <input type="search" />
        </div>
        <div className="profile-area">
          <div className="theme-btn">
            <MdIcons.MdLightMode />
            <MdIcons.MdDarkMode />
          </div>
          <div className="profile">
            <div className="profile-photo">
              <FaIcons.FaUserCircle />
            </div>
            <h5>Luke Doe</h5>
            <MdIcons.MdExpandMore />
          </div>
          <button id="menu-btn">
            <MdIcons.MdMenu />
          </button>

        </div>
      </div>
    </>
  )
}

export default Navbar