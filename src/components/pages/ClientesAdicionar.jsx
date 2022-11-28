import { Component } from "react"
import axios from "axios"
class ClientesAdicionar extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      email: "",
      phone: ""
    }
    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePhone = this.changePhone.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeName(event){
    this.setState({
      name: event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email: event.target.value
    })
  }
  changePhone(event){
    this.setState({
      phone: event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const registered = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    }

    axios.post('http://localhost:3000/clientes', registered)
      .then(res => console.log(res.data))

    this.setState({
      name: '',
      email: '',
      phone: ''
    })

  }
  
  render (){
    return (
     <div className="content1">
       <div className="card">
        <h2 className="title">Clientes Adicionar</h2>
        <div className="form-div">
          <form className="form" onSubmit={this.onSubmit}>
            <div className="lineInput">
              <label>Nome:</label>
              <input 
              type="text" 
              placeholder="Nome do Cliente" 
              onChange={this.changeName} 
              value={this.state.name}
              className="form-control form-group"
              />
            </div>

            <div className="lineInput">
              <label>E-mail:</label>
              <input 
              type="text" 
              placeholder="Email do Cliente" 
              onChange={this.changeEmail} 
              value={this.state.email}
              className="form-control form-group"
              />
            </div>
            <div className="lineInput">
              <label>Telefone:</label>
              <input 
              type="text" 
              placeholder="Telefone do Cliente" 
              onChange={this.changePhone} 
              value={this.state.phone}
              className="form-control form-group"
              />
            </div>

            <input type="submit" className="btn btn-danger btn-block" />
          </form>
        </div>
      </div>
     </div>
    )
  }
  
}

export default ClientesAdicionar