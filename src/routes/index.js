const express = require("express");

const UserRouter = require('./UserRouter');
const BlogRouter = require('./BlogRouter');
const SessionRouter = require('./SessionRouter');

const routes = express.Router();

routes.use('/users', UserRouter);
routes.use('/blogs', BlogRouter);
routes.use('/sessions', SessionRouter);

module.exports = routes;