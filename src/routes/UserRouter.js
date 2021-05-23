const express = require("express");

const UsersController = require('../app/controllers/UsersController');
const authMiddleware = require('../app/middlewares/auth');

const routes = express.Router();

routes.post('/', UsersController.create);

routes.use(authMiddleware);
routes.get('/', UsersController.index);
routes.get('/:id', UsersController.show);
routes.put('/:id', UsersController.update);
routes.delete('/:id', UsersController.delete);

module.exports = routes;