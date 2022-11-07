import { useState } from "react";
import {  NavLink, Link } from "react-router-dom"

import './Sidebar.css'

import * as FaIcons from "react-icons/fa";


import { SidebarData } from "./SidebarData";





const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const Submenu = ({item}) => {
        const [subnav, setSubnav] = useState(false)
    
        const showSubnav = () => setSubnav(!subnav)
        
        return (
            <>
                <NavLink to={item.path} className="link" activeclassName="active" onClick={item.subNav && showSubnav}>
                    <div className='iconTitle'>
                    <div>{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none" }} className="link_label">{item.title}</div>
                    </div>
                   
                
                    <div >
                        {item.subNav && subnav ? 
                        item.iconOpened : 
                        item.subNav ? 
                        item.iconClosed : 
                        null
                        }
                    </div>
                    
                </NavLink>
                
                {subnav && item.subNav.map((item, idx) => {
                    return (
                        <NavLink className="dropdownLink" to={item.path} key={idx}>
                            <div style={{paddingLeft: isOpen ? "3rem" : "2rem" }}>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none" }} className="link_label">{item.title}</div>
                        </NavLink>
                    )
                })}
            </>
        )
    }

    return (
       <div className="main" >
            <header className="nav" >
                <div className="nav_logo">
                    <Link to="/">
                        <img src="/src/assets/logo-monetaweb.png" alt="" />
                    </Link>
                </div>

                <div className="nav_actions">
                    <NavLink className="nav_actions_icons">
                        <FaIcons.FaBell />
                    </NavLink>
                    <NavLink className="nav_actions_icons">
                        <FaIcons.FaQuestionCircle />
                    </NavLink>
                    <NavLink className="nav_actions_icons">
                        <FaIcons.FaUserAlt />
                    </NavLink >
                    <NavLink className="nav_actions_icons">
                        <FaIcons.FaCog />
                    </NavLink>
                </div>
            </header>

            

            <div className="nav_flex">
                <nav className="sidebar" style={{width: isOpen ? "250px" : "80px" }}>

                    <div>
                        <Link to="#" className="navIcon" >
                        <FaIcons.FaBars onClick={toggle} />
                        </Link>
                    </div> 
                    <NavLink className="top_section">
                        <div className='iconTitle'>
                            <div><FaIcons.FaUserCircle /></div>
                            <div style={{display: isOpen ? "block" : "none" }} className="link_label">Samuel</div>
                        </div>
                    </NavLink>
                    
                    {SidebarData.map((item, index) => {
                        return (
                            <Submenu item={item} key={index} />
                        )
                    })}
                </nav>
              <main>{children}</main>  
            </div>
       </div>

        
    )
}


export default Sidebar