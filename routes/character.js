const express = require('express');
const controller = require('../controllers/character');
const routes = express.Router();

// GET
routes.get('/', controller.getCharacters);
routes.get('/:id', controller.getCharacterById);

module.exports = routes;
