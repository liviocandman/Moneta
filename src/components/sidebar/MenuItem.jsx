import { useState } from "react";
import { NavLink } from 'react-router-dom'

const MenuItem = (props) => {
  const { title, subMenu, icon, path } = props;
  const [show, setShow] = useState(false);

  return (
    <ul>
      <li >
      <NavLink to={path} onClick={() => setShow(!show)} className="menu-item" >
        <div className="menu-icon">
          {icon}
        </div>
        <span>{title}</span>
      </NavLink>
      {subMenu && subMenu.length > 0 ? (
          <ul>
            {subMenu.map((menu, idx) => (
              <li key={idx}>
                <NavLink to={menu.path}  className={`sub-menu ${show ? "active" : ""}`} >
                  <div className="menu-icon">
                    {menu.icon}
                  </div>
                  <span>{menu.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        ) : null }
      </li>
    </ul>
  );
};

export default MenuItem;