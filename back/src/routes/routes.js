const express = require('express');
const { getHome, postHome } = require('../controllers/controladorRaiz');
const rootRouter = express.Router();
//const routerMovie = require('./movieRouter');

rootRouter.get('/', getHome );
rootRouter.get('/', postHome );
module.exports = rootRouter;