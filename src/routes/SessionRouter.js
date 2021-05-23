const express = require("express");

const SessionsController = require('../app/controllers/SessionsController');

const routes = express.Router();

routes.post('/', SessionsController.login);

module.exports = routes;