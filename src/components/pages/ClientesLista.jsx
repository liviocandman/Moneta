import { useState, useEffect } from 'react'
import * as FaIcons from "react-icons/fa";
import axios from "axios";



const ClientesLista = () => {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/clientes')
      .then(res => {
        setClientes(res.data)
      })
  }, [])

  return (
    <div className="content1">
      <div className="card">
        <h2 className="title">Clientes Lista</h2>
        <form action="" method="POST">
        <table className="insideTable">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Action</th>
            </tr>
          </thead>
            <tbody>
       
                {clientes.map((cliente) =>(
                  <tr>
                    <td>{cliente.name}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.phone}</td>
                    <td>
                    <FaIcons.FaEdit />
                    <FaIcons.FaTimes  />

                    </td>
                  </tr>
                ))}
                
         
            </tbody>
         
        </table>
      </form>
      </div>
    </div>
  )
}

export default ClientesLista