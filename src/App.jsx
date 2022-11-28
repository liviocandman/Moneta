import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import SideMenu from './components/sidebar/SideMenu'
import './App.css'
import Dashboard from './components/pages/Dashboard'
import ClientesAdicionar from './components/pages/ClientesAdicionar'
import ClientesLista from './components/pages/ClientesLista'
import Emprestimos from './components/pages/Emprestimos'



function App() {

  const [inactive, setInactive] = useState(false)

  return (
    <div className="App">
      <SideMenu 
        onCollapse={(inactive) => {
          setInactive(inactive);
        }}
      />
      
      <div className={`container ${inactive ? "inactive" : ""}`}>
    
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/clientes-lista" element={<ClientesLista />} /> 
          <Route path="/clientes-adicionar" element={<ClientesAdicionar />} /> 
          <Route path="/simulacoes-emprestimos" element={<Emprestimos />} />
        </Routes>
      </div>
     
    </div>
  )
}

export default App
