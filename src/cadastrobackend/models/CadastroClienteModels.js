const mongoose = require('mongoose')

const cadastroClienteTemplate = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
    },
    phone: {
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }

    }
)

const cadastroClientedb = mongoose.model('cadastroCliente', cadastroClienteTemplate)
module.exports = cadastroClientedb