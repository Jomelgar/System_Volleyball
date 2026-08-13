const express = require('express');
const controller = require('../controllers/match');
const routes = express.Router();

// GET
routes.get('/', controller.getMatches);
routes.get('/:id', controller.getMatchById);

// POST
routes.post('/',controller.createMatch);
// DELETE
routes.delete('/:id',controller.deleteMatch);
// PATCH
routes.patch('/:id',controller.updateMatch);

module.exports = routes;