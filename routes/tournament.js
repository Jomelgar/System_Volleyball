const express = require('express');
const controller = require('../controllers/tournament');
const routes = express.Router();

// GET
routes.get('/', controller.getTournaments);
routes.get('/:id', controller.getTournamentById);

// POST
routes.post('/',controller.createTournament);
// DELETE
routes.delete('/:id',controller.deleteTournament);
// PATCH
routes.patch('/:id',controller.updateTournament);

module.exports = routes;