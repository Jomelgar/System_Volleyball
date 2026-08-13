const express = require('express');
const controller = require('../controllers/referee');
const routes = express.Router();

// GET
routes.get('/', controller.getReferees);
routes.get('/:id', controller.getRefereeById);

// POST
routes.post('/',controller.createReferee);
// DELETE
routes.delete('/:id',controller.deleteReferee);
// PATCH
routes.patch('/:id',controller.updateReferee);

module.exports = routes;