import { useState } from "react";
import { NavLink } from 'react-router-dom'

const MenuItem = (props) => {
  const { title, subMenu, iconClassName, path } = props;
  const [show, setShow] = useState(false);

  return (
    <ul>
      <li >
      <NavLink to={path} onClick={() => setShow(!show)} className="menu-item" >
        <div className="menu-icon">
          {iconClassName}
        </div>
        <span>{title}</span>
      </NavLink>
      {subMenu && subMenu.length > 0 ? (
          <ul className={`sub-menu ${show ? "active" : ""}`}>
            {subMenu.map((menu, idx) => (
              <li key={idx}>
                <NavLink to={menu.path} >{menu.title}</NavLink>
              </li>
            ))}
          </ul>
        ) : null }
      </li>
    </ul>
  );
};

export default MenuItem;