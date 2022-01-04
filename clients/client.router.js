const express = require('express')
const router = express.Router()
const clientController = require('./client.controller')

//http://localhost:5000/client
router.route('/').get(clientController.getClient)

//http://localhost:5000/client
router.route('/').post(clientController.addClient)

router.route('/:id').patch(clientController.updateClient)

//http://localhost:5000/client/:client_id
router.route('/:id').delete(clientController.deleteClient)

module.exports = router