import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FaIcons.FaWallet />,
    },
    {
        title: 'Clientes',
        path: '/clientes',
        icon: <FaIcons.FaUsers />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
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
        title: 'Fornecedores',
        path: '/fornecedores',
        icon: <FaIcons.FaBox />,
    },
    {
        title: 'Tabelas',
        path: '/tabelas',
        icon: <FaIcons.FaTable />,
    },
    {
        title: 'Contas Bancárias',
        path: '/contasbancarias',
        icon: <FaIcons.FaFileInvoiceDollar />,
    },
    {
        title: 'Cheques',
        path: '/cheques',
        icon: <FaIcons.FaMoneyCheck />,
    },
    {
        title: 'Relatórios',
        path: '/relatorios',
        icon: <FaIcons.FaPollH />,
    },
    {
        title: 'Simulações',
        path: '/simulacoes',
        icon: <FaIcons.FaChartLine />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
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
        path: '/utilitarios',
        icon: <FaIcons.FaStream />,
    }

]