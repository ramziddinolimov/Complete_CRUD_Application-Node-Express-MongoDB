const express = require('express');
const route = express.Router()

const services = require('../services/render');


/**
 * @description
 * @method GET
 */

route.get('/', services.homeRoutes);

/**
 * @description
 * @method post
 */

route.get('add_user', services.add_user);

/**
 * @description
 * @method post
 */

route.get('update_user', services.update_user);



module.exports = route