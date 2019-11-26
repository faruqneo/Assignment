const route = require('express').Router();
const { index } = require('../controller/projectController');

route.get('/', index);

module.exports = route;