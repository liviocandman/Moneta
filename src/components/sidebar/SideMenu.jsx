import { useEffect, useState } from "react";

import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'

import logo from "../../assets/logo-dark.png";
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
      
      <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      
      <div className="main-menu">
        <NavLink className="top-section">
         
            <img src={logo} alt="" />
     

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
      
      <div className="top">
        
        <NavLink onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
       <MdIcons.MdMenu />
     </NavLink>
        
        <div className="theme-toggler">
          <MdIcons.MdLightMode className='dlMode-icons active'/>
          <MdIcons.MdDarkMode className='dlMode-icons'/>
        </div>
        <div className="profile">
          <div className="info">
            <p>Hi, <b>John</b></p> 
          </div>
            <div className="profile-photo">
              <img src={"/src/assets/musk.png"} />
            </div>
          </div>
      </div>
      
    </>
   

  )
}

export default SideMenu