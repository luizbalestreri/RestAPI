const express = require('express');
const handle = require('express-async-handler');

const routes = express.Router();

const baseUrlConfig = require('./config/baseurl');

const controllers = require('./app/controllers');

/*
 * Game
 */

routes.get(`${baseUrlConfig.url}/games`, handle(controllers.GameController.index));
routes.get(`${baseUrlConfig.url}/game/:id`, handle(controllers.GameController.show));
routes.post(`${baseUrlConfig.url}/game`, handle(controllers.GameController.store));
routes.put(`${baseUrlConfig.url}/game/:id`, handle(controllers.GameController.update));
routes.delete(`${baseUrlConfig.url}/game/:id`, handle(controllers.GameController.delete));

module.exports = routes;
