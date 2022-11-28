const cadastroClientedb = require('../models/CadastroClienteModels')

//create and save new costumer
exports.create = (req,res) =>{
    //validate request
    if(!req.body){
        res.status(400).send({ message: "Content can not be emprty!"})
        return;
    }
    
    //new costumer
    const cadastroCliente = new cadastroClientedb({
        name:req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })
    
    //save costumer in database
    cadastroCliente.save(cadastroCliente)
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.json(err)
    })
}

// retrieve and return all costumers/ single costumers
exports.find = (req,res) => {
    if(req.query.id){
        const id = req.query.id

        cadastroClientedb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message: "Not found user with id" })
                }else {
                    res.send(data)
                }
            }) 
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving costumer with id" + id })
            });
    }else {
        cadastroClientedb.find()
        .then(cadastroCliente => {
            res.send(cadastroCliente)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Ocurred while retriving costumer information" })
        })
    }
}

//Update a new identified costumer by costumer id
exports.update = (req,res) =>{
    if(!req.body){
        return res.status(400).send({ message: "Data to update can not be empty"})
    }
    const id = req.params.id;
    cadastroClientedb.findByIdAndUpdate(id, req.body, {useCreateIndex: true})
    .then(data =>{
        if(!data){
            res.status(404).send({ message: `Cannot update costumer with ${id}. Maybe user not found!`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({ message: "Error Ocurred while updating costumer information"})
    })
}

//Delete a costumer with specified costumer id 
exports.delete = (req,res)=>{
    const id = req.params.id

    cadastroClientedb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message: `Cannot Delete with ${id}. Maybe id is wrong! ` })
            }else{
                res.send({
                    message:"User was deleted successfully!"
                })
            }
        })
        .catch(err=>{
            res.status(500).send({ message: "Could not delete Costumer with id=" + id })
        })
}