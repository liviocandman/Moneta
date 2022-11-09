import { useEffect, useState } from "react";
import * as FaIcons from 'react-icons/fa'

import logo from "../../assets/logo-monetaweb.png";
import { NavLink } from "react-router-dom";

import MenuItem from "./MenuItem";

export const menuData = [
  {
    title: "Dashboard",
    exact: true,
    path: "/",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Finanças",
    exact: true,
    path: "/financas",
    icon: <FaIcons.FaWallet />,
  },
  {
    title: "Clientes",
    exact: true,
    path: "/clientes",
    icon: <FaIcons.FaUsers />,
    subMenu: [
      {
        title: 'Lista',
        path: '/clientes/lista',
        icon: <FaIcons.FaUserEdit />,
      },
      {
          title: 'Adicionar',
          path: '/clientes/adicionar',
          icon: <FaIcons.FaUserPlus />,
      }
    ]
  },
  {
    title: "Fornecedores",
    exact: true,
    path: "/fornecedores",
    icon: <FaIcons.FaBox />,
  },
  {
    title: 'Tabelas',
    exact: true,
    path: '/tabelas',
    icon: <FaIcons.FaTable />,
},
{
    title: 'Cheques',
    exact: true,
    path: '/cheques',
    icon: <FaIcons.FaDollarSign />,
},
{
    title: 'Relatórios',
    exact: true,
    path: '/relatorios',
    icon: <FaIcons.FaPollH />,
},
{
  title: 'Simulações',
  exact: true,
  path: '/simulacoes',
  icon: <FaIcons.FaChartLine />,
  subMenu: [
      {
          title: 'Empréstimos',
          path: '/simulacoes/emprestimos',
          icon: <FaIcons.FaMoneyBillAlt />,
      },
      {
          title: 'Créditos',
          path: '/simulacoes/creditos',
          icon: <FaIcons.FaCreditCard />,
      },
      {
          title: 'Bancos',
          path: '/simulacoes/bancos',
          icon: <FaIcons.FaLandmark />,
      }
  ]
},
{
  title: 'Utilitários',
  exact: true,
  path: '/utilitarios',
  icon: <FaIcons.FaStream />,
}

];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false)

  useEffect(() => {
    props.onCollapse(inactive)
  })

  return (
    <>
     <header className="nav" >
     <NavLink onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
            <FaIcons.FaBars />
          </NavLink>
              <NavLink className="nav_logo" to="/">
                <img src={logo} />
              </NavLink>
             
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
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      
      <div className="main-menu">
        <NavLink className="top-section">
          <div className="avatar">
            <FaIcons.FaUserCircle className="user-img" />
            <span>Samuel</span>
          </div>

        </NavLink>


        <div className="divider">       
        </div>
        
            
            {menuData.map((item, idx) => (
              <MenuItem 
                key={idx}
                title={item.title}
                path={item.path}
                subMenu={item.subMenu || null}
                icon={item.icon}
                
              />
            ) )}
          
        </div>
      </div>
      
      
    </>
   

  )
}

export default SideMenu