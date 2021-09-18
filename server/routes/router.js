const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');


/**
 * @description
 * @method GET
 */

route.get('/', services.homeRoutes);

/**
 * @description
 * @method GET
 */

route.get('/add_user', services.add_user);

/**
 * @description
 * @method GET
 */

route.get('/update_user', services.update_user);

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);



module.exports = route;