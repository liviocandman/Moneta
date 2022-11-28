const express = require('express');
const router = express.Router()
const controller = require('../controller/controller')


//API
router.post('/clientes', controller.create);
router.get('/clientes', controller.find);
router.put('/clientes/:id', controller.update);
router.delete('/clientes/:id', controller.delete);

module.exports = router