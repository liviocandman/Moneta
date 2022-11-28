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
      .then(res => console.log(response.data))

    this.setState({
      name: '',
      email: '',
      phone: ''
    })

  }
  
  render (){
    return (
     <div className="content">
       <div className="main">
        <div className="form-div">
          <form onSubmit={this.onSubmit}>
            <input 
              type="text" 
              placeholder="Nome do Cliente" 
              onChange={this.changeName} 
              value={this.state.name}
              className="form-control form-group"
            />
             <input 
              type="text" 
              placeholder="Email do Cliente" 
              onChange={this.changeEmail} 
              value={this.state.email}
              className="form-control form-group"
            />
             <input 
              type="text" 
              placeholder="Telefone do Cliente" 
              onChange={this.changePhone} 
              value={this.state.phone}
              className="form-control form-group"
            />

            <input type="submit" className="btn btn-danger btn-block" />
          </form>
        </div>
      </div>
     </div>
    )
  }
  
}

export default ClientesAdicionar