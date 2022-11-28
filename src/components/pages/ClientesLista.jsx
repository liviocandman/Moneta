import * as FaIcons from "react-icons/fa";

const ClientesLista = () => {
  return (
    <div className="content">
      <form action="" method="POST">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Action</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>Livio</td>
                <td>liviocandman@example.com</td>
                <td>989999999</td>
                <td>
                  <FaIcons.FaEdit />
                  <FaIcons.FaTimes />

                </td>
              </tr>
            </tbody>
         
        </table>
      </form>
    </div>
  )
}

export default ClientesLista