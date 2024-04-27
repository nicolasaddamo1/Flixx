const express = require('express');
const cors = require('cors');
const app = express();
const routerMovie = require("./routes/movieRouter.js");
const rootRouter = require("./routes/routes.js");
const morgan = require('morgan');
//middlewares:
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use("/", rootRouter);
app.use("/movies", routerMovie);

module.exports = app;
