import { useEffect, useState } from "react";
import * as FaIcons from 'react-icons/fa'

import { NavLink } from "react-router-dom";

import avatar from "../../assets/avatar.png"
import logo from "../../assets/logo-monetaweb.png";

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
        path: '/clientes/list',
        icon: <FaIcons.FaUserEdit />,
      },
      {
          title: 'Adicionar',
          path: '/clientes/add',
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
    title: 'Contas Bancárias',
    exact: true,
    path: '/contasbancarias',
    icon: <FaIcons.FaFileInvoiceDollar />,
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

        <NavLink onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          <FaIcons.FaBars />
        </NavLink>

        <NavLink className="top-section">
          <div className="avatar">
            <FaIcons.FaUserCircle className="user-img" />
            <span>Samuel</span>
          </div>

        </NavLink>

     {/*   
          <div className="search-controller">
            <button className="search-btn">
              <i class="bi bi-search"></i>
            </button>
            <input type="text" placeholder="search" />
          </div> */}


        <div className="divider">
          <div className="main-menu"> 
            
              {menuData.map((item, idx) => (
                <MenuItem 
                  key={idx}
                  title={item.title}
                  path={item.path}
                  subMenu={item.subMenu || []}
                  icon={item.icon}
                  
                />
              ) )}
            
          </div>
        </div>
       
      </div>
      
      
    </>
   

  )
}

export default SideMenu