const express = require("express");

const BlogsController = require('../app/controllers/BlogsController');

const routes = express.Router();

routes.post('/', BlogsController.create);
routes.get('/', BlogsController.index);
routes.get('/:id', BlogsController.show);
routes.put('/:id', BlogsController.update);
routes.delete('/:id', BlogsController.delete);

module.exports = routes;