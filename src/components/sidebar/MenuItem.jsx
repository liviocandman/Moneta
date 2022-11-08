import { useState } from "react";
import { NavLink } from 'react-router-dom'

const MenuItem = (props) => {
  const { title, subMenu, icon, path } = props;
  const [show, setShow] = useState(false);

  return (
    <>
      <NavLink to={path} onClick={subMenu && (() => setShow(!show))} className="menu-item" >
        <div className="menu-icon">
          {icon}
        </div>
        <span>{title}</span>
      </NavLink>
      
      {show && subMenu.map((item, idx) => {
        return (
          <div className="sub-menu-line">
               <NavLink to={item.path} key={idx}  className="sub-menu" >
            <div className="menu-icon">
              {item.icon}
            </div>
            <span>{item.title}</span>
          </NavLink>
          </div>
       
        )
      })}
      
    </>
  );
};

export default MenuItem;